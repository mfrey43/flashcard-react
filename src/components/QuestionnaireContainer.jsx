import React from 'react';
import QuestionnaireTable from './QuestionnaireTable';
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog';
import { Grid, Row, Col } from 'react-bootstrap';

export default class QuestionnaireContainer extends React.Component {

    handleChange() {
        this.props.onChange(this.props.qs.length);
    }

    render() {
        return (
            <Grid>
                <Row>
                    <div className="pull-right">
                        <QuestionnaireCreateDialog/>
                    </div>
                </Row>
                <Row>
                    <Col md={12}>
                        <QuestionnaireTable questionnaires={this.props.qs}/>
                    </Col>
                </Row>
            </Grid>
        )
    }

    componentDidMount(){
        this.handleChange();
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