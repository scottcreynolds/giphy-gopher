const KEY = import.meta.env.VITE_GIPHY_API_KEY

export const searchGifs = async (query, offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=25&offset=${offset}&rating=g&lang=en`
  )
  const { data } = await response.json()
  return data
}

export const getTrendingGifs = async (offset = 0) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${KEY}&limit=25&rating=g&offset=${offset}`
  )
  const { data } = await response.json()
  return data
}
