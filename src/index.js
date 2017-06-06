import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyDmWvM-9H9hc1BhlD10wR9Y8idlc8yvy0Y'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {videos: []};
  }
  
   search = (term) => {
    YTSearch({key: API_KEY, term: term},(videos) => {
      console.log(this);
      this.setState({videos});
    });
  }
  render(){
    return( 
      <div>
        <SearchBar search={this.search}/>
        <VideoList  videos ={this.state.videos}/>
      </div>
    );
  }
};
ReactDOM.render(<App/>,document.querySelector('.container'))
