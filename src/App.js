import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card/Card'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
	const initialURL = 'https://pokeapi.co/api/v2/pokemon'
	//loadingの設定
	const [loading, setLoading] = useState(true)
	const [pokemonData, setPokemonData] = useState([])

	//ブラウザをひらくときに取得したい
	useEffect(() => {
		const fetchPokemonData = async () => {
			//すべてのポケモンデータを取得
			let res = await getAllPokemon(initialURL)
			//各ポケモンの詳細データを取得
			loadPokemon(res.results)
			setLoading(false)
		}
		fetchPokemonData()
	}, [])

	const loadPokemon = async (data) => {
		let _pokemonData = await Promise.all(
			data.map((pokemon) => {
				// console.log(pokemon)
				let pokemonRecord = getPokemon(pokemon.url)
				return pokemonRecord
			})
		)
		setPokemonData(_pokemonData)
	}
	console.log(pokemonData)

	return (
		<div calssName='App'>
			{loading ? (
				<h1>ロード中..</h1>
			) : (
				<>
					<div className='pokemonCardContainer'>
						{pokemonData.map((pokemon, i) => {
							return <Card key={i} pokemon={pokemon} />
						})}
					</div>
				</>
			)}
		</div>
	)
}

export default App
