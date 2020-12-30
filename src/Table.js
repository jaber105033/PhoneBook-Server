import React from 'react'
export default class Table extends React.Component {
    constructor(props) {
        super()
        this.state = {
            value: ""
        }
    }
    handleOnChange = (e) => {
        const value = e.target.value;
        this.setState({value:value},(prevState)=>{
            this.props.onSearchClick(this.state.value);
        });
        
    }
    // handleOnClick = (e) => {
    //     this.props.onSearchClick(this.state.value);
    // }
    render() {
        const { sample } = this.props;
        return <>
            <br />
            <input value={this.state.value} onChange={this.handleOnChange} />
            <br />
            {/* <button onClick={this.handleOnClick}>SearchButton</button> */}
            <table>
                <thead>
                    <th>
                        <td>
                            FirstName
            </td>
                        <td>
                            LastName
            </td>
                        <td>
                            Number
            </td>
                    </th>
                </thead>
                <tbody>
                    {
                        sample.map((item, index) => {
                            return <tr>
                                <td>{item.firstName}</td><td>{item.lastName}</td> <td>{item.number}</td>
                            </tr>
                        })
                    }

                </tbody>

            </table>
        </>
    }





}