import React from 'react'

// `<GifList />` is a *presentational* component. It receives data from its props and renders html given the input data. It can render a top level `<ul>` with each gif as an `<li>`.

const GifListContainer = (props) => {

  function renderGifs(){
    return(
      <ul>
        {props.gifs.map(gif => <li><img src={gif.images.downsized.url} alt=''/></li>)}
      </ul>
    )
  }

    return(
      <div>
        {renderGifs()}
      </div>
    )
}

export default GifListContainer
