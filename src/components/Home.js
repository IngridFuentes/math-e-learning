import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return(
        <div> HOME PAGE 
        <Link to="/login">
        <button className="button-login">Login</button>
        </Link>
        </div>
    )
}

export default Home;