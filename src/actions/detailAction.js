import axios from 'axios';
import {gameDetailsURL, gameScreenshotURL} from '../api';

//Action creator
export const loadDetail = (id) => async (dispatch) => {
    //Fetch game detail
    const detailGameData = await axios.get(gameDetailsURL(id));
    const gameScreenshotData = await axios.get(gameScreenshotURL(id));
    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailGameData.data,
            screen: gameScreenshotData.data,
        },
    });
};