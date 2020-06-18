import React from 'react';
import './Hello.css'

const Hello = (props) => {
    return(
        <div className="f1 tc">
        <h1>Hello world, from the Hello.js file!</h1>
        <p>Welcome aboard</p>
        <p>{props.message}</p>
        </div>
    ); 
}
// class Hello  extends React.Component{
//     render() {
//         return(
//             <div className="f1 tc">
//             <h1>Hello world, from the Hello.js file!</h1>
//             <p>Welcome aboard</p>
//             <p>{this.props.message}</p>
//             </div>
//         ); 
//     }
// }

export default Hello;