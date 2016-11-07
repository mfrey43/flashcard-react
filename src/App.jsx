import React, {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuestionnaireContainer from './components/QuestionnaireContainer';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            numQuestionnaires: 0
        };
        this.handleQuestionnairesChange = this.handleQuestionnairesChange.bind(this);
    }

    handleQuestionnairesChange(numQuestionnaires) {
        this.setState({numQuestionnaires});
    }

    render() {
        let response = this.state.numQuestionnaires + ' Questionnaires found';
        return (
            <div className="container-fluid">
                <Header
                    title="Flashcard Client with React"
                    subtitle="Version 1"/>
                <QuestionnaireContainer onChange={this.handleQuestionnairesChange} />
                <Footer message="Anonymous" rightMessage={response}/>
            </div>
        );
    }
}

export default App;
