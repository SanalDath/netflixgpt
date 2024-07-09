import BrowseHead from './BrowseHead';
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGPTsearch = useSelector(store => store.gpt.showGPTmenu);

  useNowPlayingMovies();
  
  return (
    <div>
      <BrowseHead />
      {showGPTsearch && <GPTsearch/>}
      {!showGPTsearch && <MainContainer />}
      {!showGPTsearch && <SeconderyContainer/>}
    </div>
  );
}

export default Browse;
