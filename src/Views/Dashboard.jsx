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
    }

    

    componentDidMount() {
        this.getContactsData();
    }

    async createContact(data) {
        console.log('me activaron', data)
        let petitionsProperties = { method: 'POST',
             mode: 'cors',
             body: JSON.stringify(data),
             headers:{
                'Content-Type': 'application/json'
              },
             cache: 'default' };
        let deleteResponse = await fetch('http://localhost:3030/api/users', petitionsProperties);
        let deleteRespondeJson = await deleteResponse.json();
        console.log(deleteRespondeJson);
        return deleteRespondeJson;
    }

    async getContactsData(){
        const response = await fetch('http://localhost:3030/api/users');
        const responseJson = await response.json()
        this.setState(this.state.contacts = responseJson)
        console.log('estado', this.state.contacts)
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
                            <Card contacts={this.state.contacts} />                         
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
