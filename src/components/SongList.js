import React from 'react';
import Song from './Song';

// its chart position, title and artist. 


const SongList = ({songs}) => {
const songNodes = Object.keys(songs).map((key) => {
return 
      <Song key={key}></Song>
}
)
         return (
            <div className="comment-list">
              {songNodes}
            </div>
          )
         }

















export default SongList;