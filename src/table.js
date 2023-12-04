import React from "react";

const DataTable = ({ data }) => {
    const cellStyle = {
        padding: "10px",
        margin: "10px",
        textAlign: "left",
        fontSize: "12px",
        borderBottom: "1px solid #ccc",
    };

    const dateStyle = {
        fontSize: "10px",
        color: "rgb(86, 86, 86)",
    };
    return (
        <table style={{ borderCollapse: "collapse" }} className="table-data">
            <thead className="table-head">
                <tr>
                    <th style={cellStyle}> Product Name </th>
                    <th style={cellStyle}>Brand</th>
                    <th style={cellStyle}>Price</th>
                    <th style={cellStyle}>Quantity</th>
                    <th style={cellStyle}>Total</th>
                    <th style={cellStyle}>Status</th>
                </tr>
            </thead>
            <tbody className="line">
                {data.map((item) => (
                    <tr key={item.id}>
                        <td style={cellStyle}>{item.productName}</td>
                        <td style={cellStyle}>{item.brand}</td>
                        <td style={cellStyle}>{item.price}</td>
                        <td style={cellStyle}>{item.quantity}</td>
                        <td style={cellStyle}>
                            <div>{item.total}</div>
                            <div style={dateStyle} className="cross">{item.prevTotal}</div>
                        </td>
                        <td style={cellStyle}>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DataTable;
