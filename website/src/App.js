import React from 'react';
import './App.css';

import Overview from './overview';
import Eda from './eda';
import Gen from './gen';
import Modeling from './modeling';

import titlepic from './images/titlepic.png';

class App extends React.Component {

  state = { 
    page: 'overview'
  }

  navChange = (page) => {
    this.setState({
      page
    });
  }

  getPageComponent() {
    const { page } = this.state;

    if (page === 'modeling') {
      return (<Modeling />);
    } else if (page === 'eda') {
      return (<Eda />);
    } else if (page === 'gen') {
      return (<Gen />);
    } else {
      return (<Overview />);
    }
  }

  render() {
    const { page } = this.state;
    const overViewClass = `nav-option ${page === 'overview' ? 'selected': ''}`;
    const edaClass = `nav-option ${page === 'eda' ? 'selected': ''}`;
    const genClass = `nav-option ${page === 'gen' ? 'selected': ''}`;
    const modelingClass = `nav-option ${page === 'modeling' ? 'selected': ''}`;

    return (
      <div className="container">
        <div className='title'>
          Campaign Speech Analysis using NLP
          <div className='inner-title-container'>
            <span className='subtitle'>by Ran Tokman</span>  
          </div>
          <div className='images-container'>
            <img className='project-image' src={titlepic}></img>
          </div>
        </div>     

        <div className='tab-nav'>
          <div className='inner-nav'>
          <div className={overViewClass} onClick={this.navChange.bind(this, 'overview')}>
            Project Overview
          </div>
          <div className={edaClass} onClick={this.navChange.bind(this, 'eda')}>
            Candidate EDA
          </div>
          <div className={modelingClass} onClick={this.navChange.bind(this, 'modeling')}>
            Predictive Modeling
          </div>
          <div className={genClass} onClick={this.navChange.bind(this, 'gen')}>
            Speech Generator
          </div>
          </div>
        </div>

        {this.getPageComponent()}

      </div>
    );
  }
}

export default App;
