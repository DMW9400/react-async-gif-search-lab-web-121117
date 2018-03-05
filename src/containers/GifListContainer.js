// - [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005) Learn React with chantastic
// - [Presentational vs Container Componets](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) Dan Abramov
//
// In our app the `<GifListContainer />` will be responsible for fetching the data from the giphy api, storing the first 3 gifs from the response in it's component **state**, and passing that data down to it's child the `<GifList>` component as a prop.
//
// It will also render a `<GifSearch />` component that renders the form. `<GifListContainer />` should pass down a submit handler function to `<GifSearch />` as a prop.
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
  state = {
    gifs:[],
    search:''
  }

  fetchGifs = () =>{
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC`).then(res=>res.json())
      .then(json => this.setState({gifs: json.data.slice(0,3)}, ()=>{console.log(this.state.gifs)})
    );
  }

  handleSubmit = (info) => {
    this.setState({
      search:info
    },this.fetchGifs())

  }



  componentDidMount(){
    console.log(this.state)
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }

}
