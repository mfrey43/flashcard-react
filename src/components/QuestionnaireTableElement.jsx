import React from 'react';
import {render} from 'react-dom';

export default class QuestionnaireTableElement extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.questionnaire.id}</td>
                <td>{this.props.questionnaire.title}</td>
                <td>{this.props.questionnaire.description}</td>
            </tr>
        )
    }
}