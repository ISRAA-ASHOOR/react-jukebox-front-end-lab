import { useState, useEffect } from 'react';
import * as trackService from './services/trackService';
import TrackList from './components/TrackList';
import TrackDetail from './components/TrackDetial';

const App = () => {
  const [trackList, setTrackList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const tracks = await trackService.index();
        if (tracks.error) {
          throw new Error(tracks.error);
        }
        setTrackList(tracks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTracks();
  }, []);

  const nowPlaying = (track) => {
    setSelected(track);
  };

  return (
    <>
    <TrackList trackList={trackList} nowPlaying={nowPlaying} />
    <TrackDetail selected={selected} />
    </>
  );
};

export default App;