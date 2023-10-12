//Import PersonList Component to App.js file
//Add a <PersonList /> self-closing tag in a <div> (under </header>)

// import React from 'react';
// import axios from 'axios'
// class PersonList extends React.Component {
//     state = {
//         persons: [],
//     }
// };

// componentDidMount(){
//     axios.get(`URL`).then(res => { /*carries request param appended in URL*/
//       console.log(res);
//         this.setState({persons: res.data})
//       });
//     }


//     render() {
//         return(
//             <ul>
//                 {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
//             </ul>;
//         )
//     }
// export default PersonList



//Post
//New Component File
//Import PersonList Component to App.js file
//Add a <PersonList /> self-closing tag in a <div> (under </header>)

// import React from 'react';
// import axios from 'axios'
// class PersonInput extends React.Component {
//     state = {
//         name: '',
//     }
// };

// handleChange = event => {   /*Tracks changes on <input>*/
//     this.setState({ name: event.target.value }); /*Anything entered in textbox added to state param*/
// }




// handleSubmit = event => {
//     event.preventDefault();   /*Stops browser from reloading page onSubmit*/

//     const user = {
//         name: this.state.name
//     }
//     //Use axios to post API & passing object as keypairs
//       axios.post(`URL`, { user }).then(res => {  /*carries request param in message body*/
//         console.log(res);
//         console.log(res.data);
//       })
// }


//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Person Name:
//                     <input type="text" name="name" onChange={this.handleChange} />
//                 </label>
//                 <button type='submit'>Add</button>
//             </form>
//         )
//     }
// export default PersonInput



//Delete
// import React from 'react';
// import axios from 'axios'
// class PersonInput extends React.Component {
//     state = {
//         id: 0,
//     }
// };

// handleChange = event => {   /*Tracks changes on <input>*/
//     this.setState({ id: event.target.value }); /*Anything entered in textbox added to state param*/
// }




// handleSubmit = event => {
//     event.preventDefault();   /*Stops browser from reloading page onSubmit*/


//     //Use axios to post API & passing object
//       axios.delete /*deletes element*/ (`URL/${this.state.id}`, ).then(res => {  /*carries request param in message body*/
//         console.log(res);
//         console.log(res.data);
//       })
// }


//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Person ID:
//                     <input type="number" name="id" onChange={this.handleChange} />
//                 </label>
//                 <button type='submit'>Delete</button>
//             </form>
//         )
//     }
// export default PersonInput