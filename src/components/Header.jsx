import React from 'react';

import { images } from '../javascript/imageImports';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <header className='main-header' style={{backgroundImage: `url(${images.header_bg})`}}>
            <div className="container-fluid">
                <div className="row mt-2">
                    <div className="caption col-10 col-md-8 my-5 p-5 mx-auto mx-md-0">
                        <h1 className="topic display-3 text-uppercase text-center">C&A Indoor cricket net</h1>
                        <figure className='text-center'>
                            <blockquote className="blockquote">
                            <p className="my-2 display-6 text-light">Nobody goes undefeated all the time. If you can pickup after a crushing defeat, and go on to win again, you are going to be a champion someday!!!</p>
                            </blockquote>
                            <figcaption className="blockquote-footer text-light lead">
                                Kumar Sangakkara
                            </figcaption>
                        </figure>
                        <HashLink to="#about" className='link'>
                            <button className="explore btn btn-outline-light d-block my-3 mx-auto px-4 py-3">EXPLORE</button>
                        </HashLink>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header