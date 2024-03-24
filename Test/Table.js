import React from "react";

const Table = ({data}) =>{
    return(
        <div className="table">
        <table>
            <tbody>
                <tr className="sub">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                </tr>
                {data.map(item=>(
                    <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.phonenumber}</td>
                </tr>
                ))}
                
            </tbody>
        </table>


        </div>
       
    )
}
export default Table;