import React from 'react';
import { Col, Button, Glyphicon, Modal, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class QuestionnaireCreateDialog extends React.Component {
    constructor(){
        super();
        this.state = {
            showModal: false,
            title: '',
            description: ''
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    open(){
        this.setState({showModal: true});
    }
    close(){
        this.setState({showModal: false});
    }

    handleChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (<div><Button bsStyle="primary" onClick={this.open}> <Glyphicon glyph="plus"/> </Button> <Modal
            show={this.state.showModal} onHide={this.close}> <Modal.Header closeButton> <Modal.Title>Show
            Questionnaire</Modal.Title> </Modal.Header> <Modal.Body> <Form horizontal> <FormGroup controlId="formTitle">
            <Col componentClass={ControlLabel} md={2}> Title </Col> <Col md={10}>
            <FormControl
                type="text"
                id="title"
                value={this.state.title}
                placeholder="Enter text"
                onChange={this.handleChange}
            />
        </Col> </FormGroup> <FormGroup
            controlId="formDescription"> <Col componentClass={ControlLabel} md={2}> Description </Col> <Col md={10}>
            <FormControl
                type="text"
                id="description"
                value={this.state.description}
                placeholder="Enter text"
                onChange={this.handleChange}
            />
        </Col> </FormGroup>
            <FormGroup> <Col mdPush={10} md={2} className="text-right"> <Button bsStyle="default" onClick={this.close}>Close</Button>
            </Col> </FormGroup> </Form> </Modal.Body> </Modal></div> )
    }
}
