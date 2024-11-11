const TrackList = (props) => {
    const tracks = props.trackList.map((track) => <li key={track._id}> 
    {track.title} by {track.artist}
    <button onClick={() => props.nowPlaying(track)}>play</button>
    </li>);
    return (
        <div>
          <h1>Track List</h1>
          {!props.trackList.length ? <h2>No tracks Yet!</h2> : <ul>{tracks}</ul>}
        </div>
      );
};
  
export default TrackList;