import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


import YTSearch from 'youtube-api-search';
const API_KEY = "AIzaSyBFLrPzHdUCAP59DKfYsCqiNATVaCDt-S8";

class App extends Component {
    constructor(props) {
        console.log("Constructing App object")
        super(props);
        this.state = { 
            videos: [], 
            selectedVideo: null
        };
        console.log("Call YouTube API")
        this.videoSearch('surfboards');


         
    }

    videoSearch(term) {
        YTSearch({key:API_KEY, term: term}, (videos) => {
            console.log("YouTube API has sent response data")
            console.log(videos);

            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos:videos})
         });
    }


   render() {
    console.log("THE RENDER");
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
 
    return (
          <div> 
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
                videos={this.state.videos}
                onyVideoSelect={selectedVideo => {
                      this.setState({selectedVideo}) 
                      console.log("I just set state!")
                      console.log(selectedVideo.snippet.title)
                      console.log("I just set state2!")
                   } 
                }
            />
           </div>
      );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));




/*
const App = () => {
    return (<div> 
        Hello World!
        <SearchBar />
        </div>);
}
*/


