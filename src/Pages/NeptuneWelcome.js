import { Component } from 'react';
import '../Neptune/Neptune.css';
import LogoPng from '../Neptune/Logo.png';

import { Link } from "react-router-dom";

function Logo() {
    return (
        <div>
            <img src={LogoPng} alt='No Img' />
        </div>
    );
}

class NeptuneWelcome extends Component {
    render() {
        return (
            <Link to='/register'>
                <div className="App">
                    <div className='welcome'>
                        <Logo />
                    </div>
                </div>
            </Link>

        );
    }
}

export default NeptuneWelcome;