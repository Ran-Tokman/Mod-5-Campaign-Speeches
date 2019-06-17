import React from 'react';

import './styles.css';

import overview1 from '../images/candidates/overview1.png';
import overview2 from '../images/candidates/overview2.png';

class Overview extends React.Component {

    render() {
        return (
            <div className="overview">
                <div>
                    <strong>Natural Language Processing</strong>, usually shortened as NLP, is a branch of artificial intelligence that deals with the interaction between computers and humans using the natural language. The ultimate objective of NLP is to read, decipher, understand, and make sense of the human languages in a manner that is valuable.
                </div>
                <div className='overview-source'>
                    For this project I used data from a <strong> total of 1691 speeches</strong> that were webscraped from 
                    <a href='https://www.presidency.ucsb.edu'> https://www.presidency.ucsb.edu</a>
                    
                </div>
                <div className='overview-source'></div>
                <div>
                To clean, tokenize and parse the speeches, I used the <strong>spaCy</strong> library. spaCy is a library for advanced Natural Language Processing in Python. It's built on the very latest research, comes with pre-trained statistical models and word vectors, and currently supports tokenization for over 49 languages. It features state-of-the-art speed, convolutional neural network models for tagging, parsing and named entity recognition and easy deep learning integration.
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