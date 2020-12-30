
import React from 'react'

const style = {
    form: {
      container: {
        padding: "20px",
        border: "1px solid #F0F8FF",
        borderRadius: "15px",
        width: "max-content",
        marginBottom: "40px"
      },
      inputs: {
        marginBottom: "5px"
      },
      submitBtn: {
        marginTop: "10px",
        padding: "10px 15px",
        border: "none",
        backgroundColor: "lightseagreen",
        fontSize: "14px",
        borderRadius: "5px"
      }
    }
  };
export default class PhoneBook extends React.Component {

    constructor(props) {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            number: ""
        }
    }

    handleChange = event => {
        const eventName = event.currentTarget.name;
        const value = event.currentTarget.value;
        this.setState({[eventName]:value})

      
    };
    handleSubmit = event => {
        const {firstName, lastName, number}=this.state;
        event.preventDefault();
        this.props.onSubmit(firstName, lastName, number);
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={style.form.container}>
                <label>First name:</label>
                <br />
                <input
                    style={style.form.inputs}
                    name="firstName"
                    type="text"
                    onChange={this.handleChange}
                />
                <br />
                <label>Last name:</label>
                <br />
                <input
                    style={style.form.inputs}
                    name="lastName"
                    type="text"
                    onChange={this.handleChange}
                />
                <br />
                <label>Phone:</label>
                <br />
                <input
                    style={style.form.inputs}
                    name="number"
                    type="text"
                    onChange={this.handleChange}
                />
                <br />
                <input
                    style={style.form.submitBtn}
                    className="submitButton"
                    type="submit"
                    value="Add User"
                />
            </form>
        );
    }
}