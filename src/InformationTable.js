
const style = {
    table: {
        borderCollapse: "collapse"
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px"
    }
}


export default function InformationTable({ phoneList }) {
    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First Name</th>
                    <th style={style.tableCell}>Last Name</th>
                    <th style={style.tableCell}>Number</th>
                </tr>
                {phoneList.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.number}</td>
                        </tr>
                    );
                })}
            </thead>
        </table>
    );
}