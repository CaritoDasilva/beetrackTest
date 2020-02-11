import React, { Component } from 'react'
import 'idempotent-babel-polyfill';
import Table from 'react-bootstrap/Table'
import './Card.scss'
const Card = ({contacts}) => {
    return(
        <div>
            {console.log(contacts)}

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => 
                        <tr>
                            <td key={contact.id}>
                            <img className="contactPhoto" src={contact.photo} alt=""/>
                            {contact.name}
                            </td>
                            <td>
                            {contact.description}
                            </td>                        
                        </tr>
                    )}                    
                </tbody>
            </Table>                
        </div>
    )
}

export default Card;

// export default class Card extends Component {
//     constructor(props) {
//         console.log(props)

//     }
    
    
//     render() {
//         console.log(this.props)
//         return (
//             <div>
//                 lkjlkjl
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Nombre</th>
//                             <th>Descripción</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>j</td>
//                             <td></td>
//                         </tr>
//                     </tbody>
//                 </Table>
                
//             </div>
//         )
//     }
// }
