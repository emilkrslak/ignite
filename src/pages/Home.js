//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';


//Styling and Animaiton
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';

//Components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';


const Home = () => {
    //Get current location
    const location = useLocation();
    const pathID = location.pathname.split("/")[2];

    //FETCH GAMES
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);

    //Create cards with data
    const {popular, newGames ,upcoming, searched} = useSelector(
        (state) => state.games
    );
    return(
        <GameList>
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>{pathID && <GameDetail pathId={pathID}/>}</AnimatePresence>
                    {searched.length ? (
                        <div className="searched">
                            <h2>Search results: {searched.length}</h2>
                            <Games>
                                {searched.map(game => (
                                    <Game 
                                        name={game.name} 
                                        released={game.released} 
                                        image={game.background_image} 
                                        id={game.id} 
                                        key={game.id} 
                                    />
                                ))}
                            </Games>
                        </div>
                    ) : ''}
                    <h2>Upcoming Games</h2>
                    <Games>
                        {upcoming.map(game => (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                image={game.background_image} 
                                id={game.id} 
                                key={game.id} 
                            />
                        ))}
                    </Games>
                    <h2>Popular Games</h2>
                    <Games>
                        {popular.map(game => (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                image={game.background_image} 
                                id={game.id} 
                                key={game.id} 
                            />
                        ))}
                    </Games>
                    <h2>New Games</h2>
                    <Games>
                        {newGames.map(game => (
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                image={game.background_image} 
                                id={game.id} 
                                key={game.id} 
                            />
                        ))}
                    </Games>
            </AnimateSharedLayout>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding:0rem 5rem;
    h2{
        padding:5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height:80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;
export default Home;