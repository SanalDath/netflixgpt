import BrowseHead from './BrowseHead';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';


const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <BrowseHead/>
    </div>
  );
}

export default Browse;
