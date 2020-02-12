import React, { Component } from 'react'
import './Dashboard.scss';
import Searcher from '../Shared/Searcher/Searcher.jsx';
import Card from '../Shared/Card/Card.jsx'
import Button from 'react-bootstrap/Button'
export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        }
        // this.getContactsData = this.getContactsData.bind(this);
    }

    componentDidMount() {
        this.getContactsData();
    }

    async getContactsData(){
        const response = await fetch('http://localhost:3000/api/users');
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
                    <Button><span><i className="fas fa-plus-circle"></i></span>Nuevo Contacto</Button>
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
