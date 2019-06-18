import React from 'react';

import './styles.css';

import baselineModel from '../images/baselinemodel.png'
import baselineConfusion1 from '../images/baselineconfusion1.png'
import baselineConfusion2 from '../images/baselineconfusion2.png'

import finalConfusion1 from '../images/finalconfusion1.png'
import finalConfusion2 from '../images/finalconfusion2.png'

import kamala from '../images/kamala.jpg';
import bernie from '../images/bernie.png';
import pete from '../images/pete.jpg';
import biden from '../images/biden.jpg';
import warren from '../images/warren.jpeg';

import kamalaSpeech from './kamala.json';
import bernieSpeech from './bernie.json';
import peteSpeech from './pete.json';
import warrenSpeech from './warren.json';
import bidenSpeech from './biden.json';

class Modeling extends React.Component {

    state = { 
        candidate: null
    }

    candidates = [
        'biden',
        'pete',
        'kamala',
        'warren',
        'bernie'
    ];

    candidateImg = (candidate) => {
        if (candidate === 'kamala') { 
            return kamala;
        } else if (candidate === 'bernie') {
            return bernie;
        } else if (candidate === 'biden') {
            return biden;
        } else if (candidate === 'warren') {
            return warren;
        } else if (candidate === 'pete') {
            return pete;
        }
    }

    candidateName = (candidate) => {
        if (candidate === 'kamala') { 
            return 'Kamala Harris';
        } else if (candidate === 'bernie') {
            return 'Bernie Sanders';
        } else if (candidate === 'biden') {
            return 'Joe Biden';
        } else if (candidate === 'warren') {
            return 'Elizabeth Warren';
        } else if (candidate === 'pete') {
            return 'Pete Buttigieg';
        }
    }

    setCandidate = (candidate) => {
        this.setState({
            candidate
        });
    }

    renderCandidates = () => {
        const { candidate } = this.state;

        if (!candidate) {
            const candidateProfiles = this.candidates.map((innercandidate) => {
                const name = this.candidateName(innercandidate);
                const img = this.candidateImg(innercandidate);
    
                return (
                    <div className='candidate-image-container'>
                        <div className='candidate-name'>
                            {name}
                        </div>
                        <img onClick={this.setCandidate.bind(this, innercandidate)} className='candidate-img' src={img} />
                    </div>
                )
            });
    
            return (
                <div className='candidates-container-modeling'>
                    { candidateProfiles }
                </div>
            )
        } else {
            const name = this.candidateName(candidate);
            const img = this.candidateImg(candidate);
            const speech = this.renderSpeeches(candidate)
            return (
                <React.Fragment>
                    <div className='back-btn' onClick={this.unsetCandidate}>&larr; Back</div>
                    <div className="speech-container">
                        <div className={'speech'}>
                            {speech.speech}
                        </div>
                        <div className='percent-container'>
                            <span className="speech-percent">
                                {speech.percent} chance of winning the nomination!
                            </span>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    unsetCandidate = () => {
        this.setState({
            candidate: null
        });
    }

    renderSpeeches = (candidate) => {
        if (candidate === 'kamala') { 
            return kamalaSpeech;
        } else if (candidate === 'bernie') {
            return bernieSpeech;
        } else if (candidate === 'biden') {
            return bidenSpeech;
        } else if (candidate === 'warren') {
            return warrenSpeech;
        } else if (candidate === 'pete') {
            return peteSpeech;
        }
    }


    render() {
        return (
            <div className="modeling">
                <div className='modeling-title'>
                    Baseline Modeling
                </div>
                <div>First I created a baseline model (using <strong>logistic regression</strong>) through a pipeline.</div>
                <img className='modeling-img' src={baselineModel} />
                <div className='modeling-title'>
                    Accuracy and Confusion Matrix for Baseline Model
                </div>
                <img className='modeling-img' src={baselineConfusion2} />
                <img className='modeling-img' src={baselineConfusion1} />
                


                <div className='modeling-title'>
                    Final Model- Linear SVC()
                </div>
                <div className='genned-speech'><strong>LinearSVC</strong> is one of the classifiers which performs quite well on a range of NLP based text classification tasks. The objective of a Linear SVC (Support Vector Classifier) is to fit to the data you provide, returning a "best fit" hyperplane that divides, or categorizes, your data. </div>
                
                <div className='genned-speech'>The model used the <strong>spaCy</strong> library to clean the text, <strong>CountVectorizer</strong> and <strong>TfidfTransformer</strong> (which transforms a count matrix to a normalized tf or tf-idf representation) to vectorize the text.</div>
                <div className='modeling-title'>
                    Accuracy and Confusion Matrix for Final Model
                </div>
                <img className='modeling-img' src={finalConfusion2} />
                <img className='modeling-img' src={finalConfusion1} />

                <div className='modeling-title'>
                    Using the Model to Predict the Probability of 2020 Candidates Will Win the Nomination Based on Their Announcement Speech
                </div>
                { this.renderCandidates() }
            </div>
        )
    }
}

export default Modeling;