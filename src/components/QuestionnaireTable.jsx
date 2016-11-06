import React from 'react';
import {render} from 'react-dom';
import QuestionnaireTableElement from './QuestionnaireTableElement';

export default class QuestionnaireTable extends React.Component {

    render() {
        return (
            <table className="table">
                <tbody>
                { this.props.questionnaires.map((questionnaire)=>
                    <QuestionnaireTableElement key={questionnaire.id} questionnaire={questionnaire} />
                )}
                </tbody>
            </table>
        )
    }
}