export const getAllPokemon = (url) => {
	return new Promise((resolve, reject) => {
		//データ取得
		fetch(url)
			//JSON形式に変換
			.then((res) => res.json())
			//Json形式でPromiseを返す
			.then((data) => resolve(data))
	})
}

export const getPokemon = (url) => {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => resolve(data))
	})
}
