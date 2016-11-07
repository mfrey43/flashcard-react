import React from 'react';
import QuestionnaireShowDialog from './QuestionnaireShowDialog';

export default class QuestionnaireTableElement extends React.Component {

    render() {
        return (
            <tr>
                <td>{this.props.questionnaire.id}</td>
                <td>{this.props.questionnaire.title}</td>
                <td>{this.props.questionnaire.description}</td>
                <td><QuestionnaireShowDialog questionnaire={this.props.questionnaire}/></td>
            </tr>
        )
    }
}