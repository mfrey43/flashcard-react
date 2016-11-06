import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionnaireContainer from './components/QuestionnaireContainer';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container-fluid">
            <Header
                title="Flashcard Client with React"
                subtitle="Version 1"/>
            <QuestionnaireContainer />
            <Footer message="Anonymous"/>
        </div>
    );
  }
}

export default App;
