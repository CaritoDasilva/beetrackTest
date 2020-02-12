import React, { Component } from 'react'
import 'idempotent-babel-polyfill';
import Table from 'react-bootstrap/Table'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './Card.scss'

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        };
        this.goForward = this.goForward.bind(this);
        this.deleteContact = this.deleteContact.bind(this);

    }

    deleteContact(id) {
        this.props.deleteContact(id)
    }

    async goForward() {
        this.setState({page: this.state.page ++});
        console.log(this.state)
        let petitionsProperties = { method: 'GET',
                        mode: 'cors',
                        cache: 'default' };
        let deleteResponse = await fetch(`/api/users?_page=${this.state.page}&_limit=10`, petitionsProperties);
        let deleteRespondeJson = await deleteResponse.json();
        return deleteRespondeJson;
    }

    render() {
        const {contacts} = this.props;
        return (
            <div>
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th md={4}>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => 
                        <tr key={contact.id}>
                            <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                              <Tooltip id={`tooltip-'bottom'`}>
                                Eliminar contacto.
                              </Tooltip>
                            }
                            >
                            <td className="containerPhotoName" onClick={() => this.deleteContact(contact.id)}>
                            <img className="contactPhoto" src={contact.photo} alt=""/>
                            {contact.name}                            
                            </td>
                            </OverlayTrigger>{' '}
                            <td className="contactDescription">
                            {contact.description}
                            </td>                        
                        </tr>
                    )}                    
                </tbody>
            </Table>  
            <div className="nextPage" onClick={this.goForward}><h6>Siguiente página</h6><span><i className="fas fa-arrow-circle-right"></i></span>
            </div>              
        </div>
        )
    }
}



