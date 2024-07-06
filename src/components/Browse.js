import BrowseHead from './BrowseHead';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';


const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <BrowseHead/>
      <MainContainer />
      <SeconderyContainer/>
    </div>
  );
}

export default Browse;
