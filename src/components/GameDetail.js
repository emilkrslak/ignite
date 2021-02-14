//Styling and Animaiton
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {resizeImage} from '../util';

//Redux
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

//Platform Images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import xbox from '../img/xbox.svg';
import gamepad from '../img/gamepad.svg';
import apple from '../img/apple.svg';
//Star images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';


const GameDetail = ({pathId}) => {
    const history = useHistory();
    //Exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push("/");

        }
    }

    //Platform images
    const getPlatform = (platform) => {
        switch(platform){
            case 'Playstation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case 'iOS':
                return apple;
            default:
                return gamepad;
        };
    };

    //Function for star-reviews
    const getRating = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i = 1; i <= 5; i++){
            if(i <= rating){
                stars.push(<img alt="full-star" key={i} src={starFull}></img>)
            }else{
                stars.push(<img alt="empty-star" key={i} src={starEmpty}></img>)
            }
        }
        return stars;
    };

    const {screen, game, isLoading} = useSelector((state) => state.details);
    return(
        <>
            {!isLoading && (
            <CardShadow className="shadow" onClick={exitDetailHandler}>
                <Detail layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                            <p>Rating: {game.rating}</p>{getRating()}
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data => (
                                    <img alt={data.platform.name} key={data.platform.id} src={getPlatform(data.platform.name)}></img>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>
                    <Media>
                        <motion.img layoutId={`image ${pathId}`} src={resizeImage(game.background_image, 1280)} alt={game.background_image}/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <h3>Screenshots:</h3>
                    <div className="gallery">
                        {screen.results.map(screen => (
                            <img src={resizeImage(screen.image, 1280)} key={screen.image} alt={screen.image}/>
                        ))}
                    </div>
                    <Reviews>
                        <h3>Reviews:</h3>
                        {game.ratings.map(rating => (
                            <Review>
                                <h4>"{rating.title}"</h4>
                                <p>Score: {Math.floor(rating.percent)}/100</p>
                                <p>- Player{rating.id}</p>
                            </Review>
                        ))}
                    </Reviews>
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
    background: rgba(0,0,0,0.2);
    position:fixed;
    top:0;
    left:0;
    z-index:5;
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
    img{
        width:2rem;
        height:2rem;
        display: inline;
    }
`;

const Reviews = styled(Stats)`
    padding: 2rem;
    display:block;
    align-items:center;
    justify-content:space-between;
    img{
        width:2rem;
        height:2rem;
        display: inline;
    }
    h3{
        font-size: 2rem;
    }
`;

const Review = styled(motion.div)`
    display:block;
    margin-top: 1rem;
    padding: 2rem;
    box-shadow:0px 5px 20px rgba(0,0,0,0.2);
    border-radius: 0.2rem;

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