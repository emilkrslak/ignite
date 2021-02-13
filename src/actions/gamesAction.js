import axios from 'axios';
import{popularGamesURL} from '../api';

//Action creators
export const loadGames = () => async (dispatch) =>{
    //Fetch
    const popularData = await axios.get(popularGamesURL());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
        }
    })
}
