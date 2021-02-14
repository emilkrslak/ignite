import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useState} from 'react';

//Search
import {fetchSearches} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

//logo
import logo from '../img/logo.svg';

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch =  (e) => {
        e.preventDefault();
        dispatch(fetchSearches(textInput));
        setTextInput('');
    };

    const clearSearch = () => {
        dispatch({type: 'CLEAR_SEARCHED'});
    };

    return(
        <StyledNav>
            <Logo onClick={clearSearch}>
                <img src={logo} alt="logo"/>
                <h1>GameBase</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type="submit">Search</button>
            </form>
        </StyledNav>

    );
};

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width:30%;
        font-size:1.3rem;
        padding:0.5rem;
        border:none;
        border-radius:0.5rem;
        margin-top:1rem;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
        outline:none;
    }
    button{
        font-size: 1.30rem;
        padding:0.5rem 2rem;
        cursor:pointer;
        border:none;
        box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
        background: transparent;
        outline:none;
        margin-left: 0.7rem;
        &:hover{
            background: #ff7676;
            border-radius: 2rem;
            color:white;
            transition: ease-in-out 0.3s;
        }
    }
`;

const Logo = styled(motion.div)`
    display:flex;
    justify-content:center;
    padding: 1rem;
    cursor:pointer;
    img{
        width:2rem;
        height:2rem;
    }
`;

export default Nav;