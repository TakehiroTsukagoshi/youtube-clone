import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow 
        noOfVideos={20}
        verified
        subs="2K"
        channel="Takehiro youtube channel"
        description="YOU CAN DO IT!!!!"
        image="https://icons.iconarchive.com/icons/rokey/popo-emotions/128/matrix-icon.png"
      />
      <hr/>
      <VideoRow 
        title="working youtube clone"
        subs="30K"
        views="600K"
        timestamp="4 days ago"
        channel="youtube channel clone"
        description="Always use const, sometimes use let."
        image="https://assets.st-note.com/production/uploads/images/24318512/rectangle_large_type_2_992ea3de83a5d1558283b47ecf25d137.png"
      />
      <VideoRow 
        title="working youtube clone"
        subs="30K"
        views="600K"
        timestamp="4 days ago"
        channel="youtube channel clone"
        description="Always use const, sometimes use let."
        image="https://assets.st-note.com/production/uploads/images/24318512/rectangle_large_type_2_992ea3de83a5d1558283b47ecf25d137.png"
      />
      <VideoRow 
        title="working youtube clone"
        subs="30K"
        views="600K"
        timestamp="4 days ago"
        channel="youtube channel clone"
        description="Always use const, sometimes use let."
        image="https://assets.st-note.com/production/uploads/images/24318512/rectangle_large_type_2_992ea3de83a5d1558283b47ecf25d137.png"
      />
      <VideoRow 
        title="working youtube clone"
        subs="30K"
        views="600K"
        timestamp="4 days ago"
        channel="youtube channel clone"
        description="Always use const, sometimes use let."
        image="https://assets.st-note.com/production/uploads/images/24318512/rectangle_large_type_2_992ea3de83a5d1558283b47ecf25d137.png"
      />
    </div>
  )
}

export default SearchPage
