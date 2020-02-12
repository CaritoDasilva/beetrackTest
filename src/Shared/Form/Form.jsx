import React from 'react';
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import './Form.scss';

const FormContact = (props) => {
    const [show, setShow, validated, setValidated] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = event => {
        props.formContact[event.target.id] = event.target.value;
        console.log('propr', event.target.id)
    }
    const createContact = async event => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(event.target.value)
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            console.log('cool', props)
            let infoForm = 'vengo desde el form'
            props.createContact(props.formContact);
        }
    
        
    }

    return (
        <div className="formContainer">
            <Button onClick={handleShow}><span><i className="fas fa-plus-circle"></i></span>Nuevo Contacto</Button>
            <Modal className="modalContainer" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Agregar nuevo contacto</Modal.Title>
            </Modal.Header>
                <Form noValidate validated={validated} onSubmit={createContact}>
                    <Modal.Body>
                            <Form.Group controlId="photo">
                                <Form.Label>URL Imagen de perfil</Form.Label>
                                <Form.Control type="text" onChange={handleChange} required/>                        
                            </Form.Group>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text"  onChange={handleChange} required/>                        
                            </Form.Group>
                            <Form.Group controlId="description">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows="3" onChange={handleChange} required/>
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button type="submit" className="saveButton" variant="secondary" onClick={handleClose}>
                      Guardar
                    </Button>        
                    </Modal.Footer>
                </Form>
            </Modal>            
        </div>
    )
}

export default FormContact;

