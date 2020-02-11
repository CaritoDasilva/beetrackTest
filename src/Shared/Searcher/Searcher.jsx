import React, { Component } from 'react'

export default class Searcher extends Component {
    getProps() {
        console.log(this.props.getProps())
    }
    render() {

        return (
            <div>
                {/* {this.getProps()} */}
                <span><i className="fas fa-search"></i></span><input type="text" placeholder="Buscar contacto..."/>
            </div>
        )
    }
}

// const Searcher = (props) => {
//     return(
//         <div>
//             <input type="text"/>

//         </div>
//     )

// }


// export default Searcher;