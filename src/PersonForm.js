import React from 'react';
export default class PersonForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            number: ''
        }
        
    }
    handleInputChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    this.setState({[name]:value})

    }
    handleOnClick=(e)=>{
        const {firstName,lastName,number}=this.state;
    this.props.onClick(firstName,lastName,number);
    
    }

    render() {
        const {firstName,lastName,number}=this.state;

        return <>
        
        <label>FirstName</label>
            <input name="firstName" onChange={this.handleInputChange} value={firstName} />
            <label>LastName</label>
            <input name="lastName" onChange={this.handleInputChange}  value={lastName} />
            <label>Number</label>
            <input name="number" onChange={this.handleInputChange}  value={number} />

            <input type="submit" onClick={this.handleOnClick}></input>
        
            

            
        </>
    }


} 