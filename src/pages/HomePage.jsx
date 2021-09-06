import React from 'react';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            
                <header className="hero">
                    <h1 className="hero-text">
                        Hi I am  
                        
                        <span>
                            Lorem, ipsum 
                        </span>
                    </h1>
                    <p className="h-sub-text">
                        Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eum provident sint debitis
                         labore fugiat iusto, nulla amet, pariatur 
                         aliquid vero accusamus voluptate rerum officia, 
                         tempore corporis totam eos quibusdam veniam!
                    </p>
                    <div className="icons">
                        <Link className="icon-holder">
                             <FontAwesomeIcon icon={faFacebook}className="icon fb"/>
                        </Link>
                        <Link className="icon-holder" >
                             <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                        </Link>
                        <Link className="icon-holder">
                             <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                        </Link>
                        <Link className="icon-holder" >
                             <FontAwesomeIcon icon={faTwitter} className="icon tw"/>
                        </Link>
                        <Link className="icon-holder">
                             <FontAwesomeIcon icon={faInstagram} className="icon ig"/>
                        </Link>
                       
                    </div>
                </header>
            </div>
        
    )
}

export default HomePage;
