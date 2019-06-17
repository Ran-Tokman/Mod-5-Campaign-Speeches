import React from 'react';

import './styles.css';

import bernie0 from '../images/candidates/bernie0.png';
import bernie1 from '../images/candidates/bernie1.png';
import bernie2 from '../images/candidates/bernie2.png';
import bernie3 from '../images/candidates/bernie3.png';

import gore0 from '../images/candidates/gore0.png';
import gore1 from '../images/candidates/gore1.png';
import gore2 from '../images/candidates/gore2.png';
import gore3 from '../images/candidates/gore3.png';

import obama0 from '../images/candidates/obama0.png';
import obama1 from '../images/candidates/obama1.png';
import obama2 from '../images/candidates/obama2.png';
import obama3 from '../images/candidates/obama3.png';

import hillary0 from '../images/candidates/hillary0.png';
import hillary1 from '../images/candidates/hillary1.png';
import hillary2 from '../images/candidates/hillary2.png';
import hillary3 from '../images/candidates/hillary3.png';

import bush0 from '../images/candidates/bush0.png';
import bush1 from '../images/candidates/bush1.png';
import bush2 from '../images/candidates/bush2.png';
import bush3 from '../images/candidates/bush3.png';

import mccain0 from '../images/candidates/mccain0.png';
import mccain1 from '../images/candidates/mccain1.png';
import mccain2 from '../images/candidates/mccain2.png';
import mccain3 from '../images/candidates/mccain3.png';

import romney0 from '../images/candidates/romney0.png';
import romney1 from '../images/candidates/romney1.png';
import romney2 from '../images/candidates/romney2.png';
import romney3 from '../images/candidates/romney3.png';

import trump0 from '../images/candidates/trump0.png';
import trump1 from '../images/candidates/trump1.png';
import trump2 from '../images/candidates/trump2.png';
import trump3 from '../images/candidates/trump3.png';

class Eda extends React.Component {

    bernie = [ bernie0, bernie1, bernie2, bernie3 ];
    obama = [ obama0, obama1, obama2, obama3 ];
    gore = [ gore0, gore1, gore2, gore3 ];
    hillary = [ hillary0, hillary1, hillary2, hillary3 ];

    bush = [ bush0, bush1, bush2, bush3 ];
    mccain = [ mccain0, mccain1, mccain2, mccain3 ];
    romney = [ romney0, romney1, romney2, romney3 ];
    trump = [ trump0, trump1, trump2, trump3 ];

    state = {
        candidate: null
    }

    candidateImages = (candidate) => {
        if (candidate === 'bernie') { 
            return this.bernie;
        } else if (candidate === 'hillary') {
            return this.hillary;
        } else if (candidate === 'romney') {
            return this.romney
        } else if (candidate === 'bush') {
            return this.bush;
        } else if (candidate === 'trump') {
            return this.trump;
        } else if (candidate === 'obama') {
            return this.obama;
        } else if (candidate === 'mccain') {
            return this.mccain;
        } else if (candidate === 'gore') {
            return this.gore;
        }
    }

    candidateName = (candidate) => {
        if (candidate === 'bernie') { 
            return 'Bernie Sanders';
        } else if (candidate === 'hillary') {
            return 'Hillary Clinton';
        } else if (candidate === 'romney') {
            return 'Mitt Romney';
        } else if (candidate === 'bush') {
            return 'George W. Bush';
        } else if (candidate === 'trump') {
            return 'Donald J. Trump';
        } else if (candidate === 'obama') {
            return 'Barack Obama';
        } else if (candidate === 'mccain') {
            return 'John McCain';
        } else if (candidate === 'gore') {
            return 'Al Gore';
        }
    }

    setCandidate = (candidate) => {
        this.setState({
            candidate
        });
    }

    unsetCandidate = () => {
        this.setState({
            candidate: null
        });
    }

    renderCandidateCharts = () => {
        const { candidate } = this.state;
        if (!!candidate) { 
            const images = this.candidateImages(candidate);
            const name = this.candidateName(candidate);
            return (
                <div>
                    <div className='back-btn' onClick={this.unsetCandidate}>&larr; Back</div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            {name}
                        </div>
                        {images.map((image, index) => {
                            const imgCls = index === 0 ? 'candidate-img' : 'candidate-graphs';
                            return (
                                <img className={imgCls} src={image} />
                            );
                        })}
                    </div>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                <div className='candidates-container'>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Al Gore
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'gore')} className='candidate-img' src={gore0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Barack Obama
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'obama')} className='candidate-img' src={obama0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Bernie Sanders
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'bernie')} className='candidate-img' src={bernie0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Hillary Clinton
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'hillary')} className='candidate-img' src={hillary0} />
                    </div>
                </div>
                <div className='candidates-container'>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            George W. Bush
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'bush')} className='candidate-img' src={bush0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            John McCain
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'mccain')} className='candidate-img' src={mccain0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Mitt Romney
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'romney')} className='candidate-img' src={romney0} />
                    </div>
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            Donald J. Trump
                        </div>
                        <img onClick={this.setCandidate.bind(this, 'trump')} className='candidate-img' src={trump0} />
                    </div>
                </div>
                </React.Fragment>
            )
        }
    }

    render() {
        return (
            <div className="eda">
                {this.renderCandidateCharts()}
            </div>
        )
    }
}

export default Eda;