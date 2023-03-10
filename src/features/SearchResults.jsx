import Masonry from 'react-masonry-css'

const COLUMN_BREAKPOINTS = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
}

export const SearchResults = ({ gifs }) => {
  const handleImageClick = (e) => {
    e.preventDefault()
    window.open(e.target.parentElement.dataset.imgurl);
  }

  return (
    <Masonry breakpointCols={COLUMN_BREAKPOINTS} className="results-grid" columnClassName='results-col'>
        {gifs.map((gif) => (
          <div key={gif.id} data-imgurl={gif.url} className="card" onClick={handleImageClick}><img src={gif.images.downsized.url} /></div>
        ))}
      </Masonry>

  )
}
