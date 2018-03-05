import React from 'react'

// The `<GifSearch />` component will render a form that receives the user input for the giphy search. The text input should be a *controlled component* that stores the value of the input in it's component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.

// The `<GifSearch />` component will render a form that receives the user input for the giphy search. The text input should be a *controlled component* that stores the value of the input in its component state and renders the DOM accordingly. The React component is always in charge of what the DOM looks like.
//
// `<GifSearch />` should receive a callback prop from its parent.  On a submit event, it should invoke that callback prop with the value of the text input. It is this callback function, defined in  `<GifListContainer />`, that will actually query the api with the text the user has entered.

export default class GifSearch extends React.Component{
  state={
    search:''
  }

  handleChange = (e) =>{
      this.setState({
        search:e.target.value
      }, ()=>{console.log(this.state)})

  }

render(){
  return(
    <div>
      <form onSubmit={event =>{
        event.preventDefault();
        this.props.handleSubmit(this.state.search)}
      }>
        <input type='text' onChange={this.handleChange}/>
        <input type='submit' />
      </form>
    </div>
  )
}

}
