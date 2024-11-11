const TrackDetail = (props) => {
    if (!props.selected)
      return (
        <div>
          <h1>NO Track is playing</h1>
        </div>
      );
  
    return (
      <div>
        <h1>Now playing:</h1>
        <p><strong>Title:</strong> {props.selected.title}</p>
        <p><strong>Artist:</strong> {props.selected.artist}</p>
      </div>
    );
};
  
export default TrackDetail;