//Styling and Animaiton
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';
import {resizeImage} from '../util';

const Game = ({name, released, image, id}) => {
    const stringPathId = id.toString();
    //Load detail handler
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    };

    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>Released: {released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={resizeImage(image, 1280)} alt={name}/>
            </Link>
        </StyledGame>
    );
};


const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow:0px 5px 20px rgba(0,0,0,0.2);
    text-align:center;
    border-radius: 0.3rem;
    cursor:pointer;
    overflow:hidden;
    img{
        width:100%;
        height: 40vh;
        object-fit:cover;
    }
    &:hover{
        box-shadow:0px 5px 35px rgba(0,0,0,0.2);
    }
`;

export default Game;