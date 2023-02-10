const KEY = import.meta.env.VITE_GIPHY_API_KEY

export const searchGifs = async (query) => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`
  )
  const { data } = await response.json()
  return data
}

export const getTrendingGifs = async () => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${KEY}&limit=25&rating=g`
  )
  const { data } = await response.json()
  return data
}
