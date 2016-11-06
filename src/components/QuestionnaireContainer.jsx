import React from 'react';
import {render} from 'react-dom';
import QuestionnaireTable from './QuestionnaireTable';

export default class QuestionnaireContainer extends React.Component {

    render() {
        let response = this.props.qs.length + ' Questionnaires found';
        return (
            <div>
                <h2>{response}</h2>
                <QuestionnaireTable questionnaires={this.props.qs}/>
            </div>
        )
    }
}

QuestionnaireContainer.defaultProps = {
    qs: [
        {'id': 1, 'title': 'Test Title 1', 'description': 'Test Description 1'},
        {'id': 2, 'title': 'Test Title 2', 'description': 'Test Description 2'},
        {'id': 3, 'title': 'Test Title 3', 'description': 'Test Description 3'},
        {'id': 4, 'title': 'Test Title 4', 'description': 'Test Description 4'},
        {'id': 5, 'title': 'Test Title 5', 'description': 'Test Description 5'}
    ]
};