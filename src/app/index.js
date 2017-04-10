import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Search from '../components/search';
import VideoList from '../components/video-list';
import VideoDetail from '../components/video-detail';

const API_Key = 'AIzaSyChOTgWLFVXCMlhWmhnA1t2Ro3L-eG0JII';

class App  extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
           YTSearch({key: API_Key, term: term}, (videos) => {
             //this.setState({ videos: data });
             this.setState({ 
                 videos: videos,
                 selectedVideo: videos[0]
             });
        });
    }

    render() {
           return (
             <div>
                 <Search  onSearchTermChange ={term => this.videoSearch(term)}/>
                 <VideoDetail video={this.state.selectedVideo} />
                 <VideoList 
                 onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                 videos = {this.state.videos} />
             </div>
         );
    }
}

ReactDOM.render(<App />, document.querySelector('.app'));