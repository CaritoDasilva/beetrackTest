import React, { Component } from 'react'
import 'idempotent-babel-polyfill';
import Table from 'react-bootstrap/Table'
import Tooltip from 'react-bootstrap/Tooltip'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import './Card.scss'

// const Card = ({contacts}) => {

//     deleteContact(id) {
//         console.log('contacto', id)
//     }
//     return(
//         <div>
//             {console.log(contacts)}

//             <Table striped bordered hover size="md">
//                 <thead>
//                     <tr>
//                         <th md={4}>Nombre</th>
//                         <th>Descripción</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {contacts.map(contact => 
//                         <tr>
//                             <OverlayTrigger
//                             key={'bottom'}
//                             placement={'bottom'}
//                             overlay={
//                               <Tooltip id={`tooltip-'bottom'`}>
//                                 Eliminar contacto.
//                               </Tooltip>
//                             }
//                             >
//                             <td className="containerPhotoName" key={contact.id}>
//                             <img className="contactPhoto" src={contact.photo} alt=""/>
//                             {contact.name}                            
//                             </td>
//                             </OverlayTrigger>{' '}
//                             <td className="contactDescription">
//                             {contact.description}
//                             </td>                        
//                         </tr>
//                     )}                    
//                 </tbody>
//             </Table>  
//             <div className="nextPage"><h6>Siguiente página</h6><span><i class="fas fa-arrow-circle-right"></i></span>
//             </div>              
//         </div>
//     )
// }

// export default Card;


export default class Card extends Component {
    constructor(props) {
        super(props);
        this.deleteContact = this.deleteContact.bind(this);

    }

    async deleteContact(id) {
        let myInit = { method: 'DELETE',
                        mode: 'cors',
                        cache: 'default' };
        let deleteResponse = await fetch(`http://localhost:3000/api/users/${id}`, myInit);
        let deleteRespondeJson = await deleteResponse.json();
        console.log(deleteRespondeJson);
        return deleteRespondeJson;
    }

    render() {
        const {contacts} = this.props;
        return (
            <div>
            {console.log(this.props)}

            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th md={4}>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => 
                        <tr>
                            <OverlayTrigger
                            key={'bottom'}
                            placement={'bottom'}
                            overlay={
                              <Tooltip id={`tooltip-'bottom'`}>
                                Eliminar contacto.
                              </Tooltip>
                            }
                            >
                            <td className="containerPhotoName" key={contact.id} onClick={() => this.deleteContact(contact.id)}>
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
            <div className="nextPage"><h6>Siguiente página</h6><span><i class="fas fa-arrow-circle-right"></i></span>
            </div>              
        </div>
        )
    }
}



