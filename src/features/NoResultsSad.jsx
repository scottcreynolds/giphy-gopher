import {useEffect, useRef, useState} from 'react'

export const NoResultsSad = ({oopsNoResults, searchTerm}) => {
  const [sad, setSad] = useState({})
  const previousSad = useRef()

  const possibilities = [
    {
      title: "so that's gonna be a...",
      url: 'https://media.giphy.com/media/YlHUsoa79OqzweNw0j/giphy.gif',
    },
    {
      title: "You may wanna pivot to a new search",
      url: 'https://media.giphy.com/media/UrbnbuU24p1zgyDMUH/giphy.gif',
    },
    {
      title: "",
      url: 'https://media.giphy.com/media/Kc7qzYMnOTcDb0aEw5/giphy.gif',
    },
  ]

  useEffect(() => {
    //HACK ok this is a little weird but since it's a demo and since
    // it's a limited dataset, I want to make sure a new bad search
    // shows a different result than last time.
    let idx = Math.floor(Math.random() * possibilities.length)
    if (previousSad.current === idx) {
      idx = (idx + 1) % possibilities.length
    }
    previousSad.current = idx
    console.log(idx)
    setSad(possibilities[idx])
  }, [searchTerm])

  return (
    oopsNoResults && <div>
      <h2>No results for {searchTerm}</h2>
      <h4>{sad.title}</h4>
      <img src={sad.url} />
    </div>
  )
}
