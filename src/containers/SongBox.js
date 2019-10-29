import React, {Component} from 'react';
import SongList from '../components/SongList';

class SongBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            songs: []
        }
    }


    componentDidMount(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(
            (songs) => {
            this.setState({
                songs: songs
            });
    })
}

    render(){
        const {songs} = this.state;

        return(
            <div className="song-box">
                <h1> 20 UK Top Songs </h1>
                <SongList songs={this.state.songs}/>
            </div>
        )
    }
}









export default SongBox;