import { useEffect, useState } from 'react'

import './App.css'
import Card from './components/Card/Card'
import Navbar from './components/Navbar/Navbar'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
	const initialURL = 'https://pokeapi.co/api/v2/pokemon'
	//loadingの設定
	const [loading, setLoading] = useState(true)
	const [pokemonData, setPokemonData] = useState([])
	const [nextURL, setNextURL] = useState('')
	const [prevURL, setPrevURL] = useState('')

	//ブラウザをひらくときに取得したい
	useEffect(() => {
		const fetchPokemonData = async () => {
			//すべてのポケモンデータを取得
			let res = await getAllPokemon(initialURL)
			//各ポケモンの詳細データを取得
			// console.log(res)
			loadPokemon(res.results)
			setNextURL(res.next)
			setPrevURL(res.previous)
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
	// console.log(pokemonData)

	const handleNextPage = async () => {
		setLoading(true) //読込中
		let data = await getAllPokemon(nextURL)
		await loadPokemon(data.results)
		setNextURL(data.next)
		setPrevURL(data.previous)
		setLoading(false)
	}
	const handlePrevPage = async () => {
		if (!prevURL) return
		setLoading(true)
		let data = await getAllPokemon(prevURL)
		setNextURL(data.next)
		setPrevURL(data.previous)
		setLoading(false)
	}

	return (
		<>
			<Navbar />
			<div calssName='App'>
				{loading ? (
					<h1>loading..</h1>
				) : (
					<>
						<div className='pokemonCardContainer'>
							{pokemonData.map((pokemon, i) => {
								return <Card key={i} pokemon={pokemon} />
							})}
						</div>
						<div className='btn'>
							<button onClick={handlePrevPage}>prev</button>
							<button onClick={handleNextPage}>next</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default App
