//Styling and Animaiton
import styled from 'styled-components';
import {motion} from 'framer-motion';

//Redux
import {useSelector} from 'react-redux';


const GameDetail = () => {
    const {screen, game, isLoading} = useSelector((state) => state.details);
    return(
        <>
            {!isLoading && (
            <CardShadow>
                <Detail>
                    <Stats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <img src={game.background_image} alt={game.background_image}/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <h3>Screenshots:</h3>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img src={screen.image} key={screen.image} alt={screen.image}/>
                        ))}
                    </div>
                </Detail>
            </CardShadow>
            )}
        </>
    );
};


const CardShadow = styled(motion.div)`
    width:100%;
    min-height:100vh;
    overflow-y:scroll;
    background: rgba(0,0,0,0.7);
    position:fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color:darkgrey;
    }
    &::-webkit-scrollbar-track{
        background-color:white;
    }
`;

const Detail = styled(motion.div)`
    width:80%;
    top: 5%;
    border-radius:0.3rem;
    padding:2rem 5rem;
    background:white;
    position:absolute;
    left:10%;
    color:black;
    img{
        width:100%;
    }
`;

const Stats = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content:space-between;
`;

const Info = styled(motion.div)`
    text-align:center;
`;

const Platforms = styled(motion.div)`
    display:flex;
    justify-content:space-evenly;
    img{
        margin-left:3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width:100%;
    }

`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;


export default GameDetail;