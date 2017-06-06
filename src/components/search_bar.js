import React, {Component} from 'react'
class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: ''};
  }
  render() {
    return (
      <div>
        <input
          value = {this.state.term} 
          onChange={this.onChanged } />
      </div>
    );
  }
  
  onChanged = (event) =>{
    this.setState({term: event.target.value})
    this.props.search(this.state.term)
  }
}
export default SearchBar