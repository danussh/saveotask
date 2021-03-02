import React from "react";
import Maps from "./Maps";
const Tables = ({ data }) => {

  const showroute =()=>{
    var datas = data;
    console.log(datas)

  }

  return (
    
    <>
      <div className="table">
        <table>
          <tr>
            <th style={{ width: "100px", textAlign: "start" }}>
              My Coordinates
            </th>
            <th style={{ width: "100px", textAlign: "start" }}>Default</th>
            <th style={{ width: "100px", textAlign: "start" }}>Default</th>
          </tr>
          <tr>
            <td style={{ width: "300px", textAlign: "start" }}>
              1{data.length > 0 ? ")" + data[0].location : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 0 ? data[0].latitude : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 0 ? data[0].longitude : "........"}
            </td>
          </tr>
          <tr>
            <td style={{ width: "300px", textAlign: "start" }}>
              2{data.length > 1 ? ")" + data[1].location : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 1 ? data[1].latitude : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 1 ? data[1].longitude : "........"}
            </td>
          </tr>
          <tr>
            <td style={{ width: "300px", textAlign: "start" }}>
              3{data.length > 2 ? ")" + data[2].location : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 2 ? data[2].latitude : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 2 ? data[2].longitude : "........"}
            </td>
          </tr>
          <tr>
            <td style={{ width: "300px", textAlign: "start" }}>
              4{data.length > 3 ? ")" + data[3].location : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 3 ? data[3].latitude : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 3 ? data[3].longitude : "........"}
            </td>
          </tr>
          <tr>
            <td style={{ width: "300px", textAlign: "start" }}>
              5{data.length > 4 ? ")" + data[4].location : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 4 ? data[4].latitude : "........"}
            </td>
            <td style={{ textAlign: "start" }}>
              {data.length > 4 ? data[4].longitude : "........"}
            </td>
          </tr>
        </table>      
          <div>
          <button className="route" type ="click"onClick={showroute}>Show Route</button>
        </div>
      </div>
    </>
  );
};

export default Tables;
