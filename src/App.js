import logo from './logo.svg';
import './App.css';
import Table from './Table'
import PersonForm from './PersonForm'
import { render } from 'react-dom';
import React from 'react'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      contacts: [],
      searchResult: []
    }
  }
  handleOnClick = (firstName, lastName, number) => {
    const newContacts = [...this.state.contacts];
    newContacts.push({ firstName: firstName, lastName: lastName, number: number })
    this.setState({ contacts: newContacts,searchResult:newContacts })

  }
  handleSearchButton = (value) => {
    setTimeout(()=>{
      let newContacts = [...this.state.contacts];
    newContacts = newContacts.filter((item, index) => {
      return (
        item.firstName.toLowerCase().includes(value.toLowerCase())
        ||
        item.lastName.toLowerCase().includes(value.toLowerCase())
        ||
        item.number.toLowerCase().includes(value.toLowerCase()))
    })
    this.setState({searchResult:newContacts})
    },1000)
    
  }
  render() {
    return (
      <div className="App">
        <PersonForm onClick={this.handleOnClick} />
        <Table onSearchClick={this.handleSearchButton} sample={this.state.searchResult} />
      </div>
    );
  }

}

export default App;
