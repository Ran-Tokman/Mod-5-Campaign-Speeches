import React from 'react';

import './styles.css';

import overview1 from '../images/candidates/overview1.png';
import overview2 from '../images/candidates/overview2.png';

class Overview extends React.Component {

    render() {
        return (
            <div className="overview">
                <div>
                    Natural Language Processing, usually shortened as NLP, is a branch of artificial intelligence that deals with the interaction between computers and humans using the natural language. The ultimate objective of NLP is to read, decipher, understand, and make sense of the human languages in a manner that is valuable.
                </div>
                <div className='overview-source'>
                    For this project I used data from 1691 total speeches that were webscraped from 
                    <a href='https://www.presidency.ucsb.edu'> https://www.presidency.ucsb.edu</a>
                </div>
                <div className='overview-charts'>
                    <img src={overview1} />
                    <img src={overview2} />
                </div>

            </div>
        )
    }
}

export default Overview;