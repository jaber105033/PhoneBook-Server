import React from 'react'
import PhoneBook from './phoneBook'
import InformationTable from './InformationTable'
export default class Application extends React.Component  {

    constructor(props) {
        super()
        this.state = {
            phones: []
        }
    }

    handleSubmit = (firstName, lastName, number) => {
        const phoneList = [...this.state.phones];
        phoneList.push({
            firstName: firstName,
            lastName: lastName,
            number: number
        });
        fetch("http://localhost:3001/add",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName:'fristName',
                lastName:'lastName',
                number:'number'
            }),
        })
        this.setState({phones:phoneList});
    };
    render() {
        return (
            <section>
                <PhoneBook onSubmit={this.handleSubmit} />
                <InformationTable phoneList={this.state.phones} />
            </section >
        );
    }

}