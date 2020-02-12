import React, { Component } from 'react'
import './Dashboard.scss';
import Searcher from '../Shared/Searcher/Searcher.jsx';
import FormContact from '../Shared/Form/Form.jsx'
import Card from '../Shared/Card/Card.jsx'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            formContact: {
                photo: '',
                name: '',
                description: ''
            },
            page: 1
        }
        this.createContact = this.createContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    

    componentDidMount() {
        this.getContactsData();
    }

    async createContact(data) {
        let petitionsProperties = { method: 'POST',
             mode: 'cors',
             body: JSON.stringify(data),
             headers:{
                'Content-Type': 'application/json'
              },
             cache: 'default' };
        let deleteResponse = await fetch('http://localhost:3030/api/users', petitionsProperties);
        let deleteRespondeJson = await deleteResponse.json();
        this.getContactsData()
        return deleteRespondeJson;
    }

    async getContactsData(){
        const response = await fetch('http://localhost:3030/api/users');
        const responseJson = await response.json()
        this.setState(this.state.contacts = responseJson)
    }

    async deleteContact(id) {
        let petitionsProperties = { method: 'DELETE',
                            mode: 'cors',
                            cache: 'default' };
            let deleteResponse = await fetch(`http://localhost:3030/api/users/${id}`, petitionsProperties);
            let deleteRespondeJson = await deleteResponse.json();
            await this.getContactsData();            
            return deleteRespondeJson;
    }

    doTheSearch() {

    }
    render() {

        if (this.state.contacts.length > 0) {
            return (                   
                <div className='background'>
                    <div className="titleContainer">
                        <h5 className="firstW">Test</h5><h5 className="secondW">Beetrack</h5>
                    </div>
                    <Searcher doTheSearch={this.doTheSearch()}/>
                    <div className="buttonContainer">
                        <FormContact formContact={this.state.formContact} createContact={this.createContact}/>                    
                    </div>

                    <div>
                        { 
                            <Card contacts={this.state.contacts} deleteContact={this.deleteContact} />                         
                        }                    
                    </div>        
                </div>
            );
        } else {
            return (
                <p>Cargando información...</p>
            )
        }
        

        
    }
}
