import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
import VideoDetails from './components/video_detail'
const API_KEY = 'AIzaSyDmWvM-9H9hc1BhlD10wR9Y8idlc8yvy0Y'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {videos: [], selectedVideo: null};
    this.search('surfboards')
  }
  
  
   search = (term) => {
    YTSearch({key: API_KEY, term: term},(videos) => {
      console.log(this);
      this.setState({videos:videos, selectedVideo: videos[0]});
    });
  }
  render(){
    return( 
      <div>
        <SearchBar search={this.search}/>
        <VideoDetails video = {this.state.selectedVideo}/>
        <VideoList  videos ={this.state.videos} setSelectedVideo ={selectedVideo => this.setState({selectedVideo})}/>
      </div>
    );
  }
};
ReactDOM.render(<App/>,document.querySelector('.container'))
