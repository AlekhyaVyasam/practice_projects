// import React from 'react';
 
// const Table = () => {
//     return(
// <table className="table table-striped table-hover">
//   <thead>
//     <tr>
//       <th >
//         <div className='col-6'>ID</div></th>
//       <th scope="col">Sensor Name</th>
//       <th scope="col">Temperature Value</th>
//       <th scope="col">Time Stamp</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>

//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>
//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>

//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>
//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>

//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>
//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>

//     <tr>
//       <th scope="row">1</th>
//       <td>Humidity Sensor</td>
//       <td>17.0</td>
//       <td>2024-12-20T13:30</td>
      
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Humidity Sensor</td>
//       <td>15.0</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Humidity Sensor</td>
//       <td>13.5</td>
//       <td>2024-12-20T11:00</td>
//     </tr>
//     <tr>
//       <th scope="row">4</th>
//       <td>Temperature Sensor</td>
//       <td>29.5</td>
//       <td>2024-12-20T15:04</td>
//     </tr>
//     <tr>
//       <th scope="row">5</th>
//       <td>Temperature Sensor</td>
//       <td>28.75 </td>
//       <td>2024-12-20T17:30 </td>
//     </tr>
//     <tr>
//       <th scope="row">6</th>
//       <td>Temperature Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T13:31</td>
//     </tr>
//     <tr>
//       <th scope="row">7</th>
//       <td>Temperature Sensor</td>
//       <td>26.75 </td>
//       <td>2024-12-20T11:02</td>
//     </tr>
//     <tr>
//       <th scope="row">8</th>
//       <td>Humidity Sensor</td>
//       <td>30.0</td>
//       <td>2024-12-20T12:03</td>
//     </tr>
//     <tr>
//       <th scope="row">9</th>
//       <td>Humidity Sensor</td>
//       <td>28.0 </td>
//       <td>2024-12-20T15:05</td>
//     </tr>
//     <tr>
//       <th scope="row">10</th>
//       <td>Humidity Sensor</td>
//       <td>27.5 </td>
//       <td>2024-12-20T17:10</td>
//     </tr>
//     <tr>
//       <th scope="row">11</th>
//       <td>Humidity Sensor</td>
//       <td>26.75</td>
//       <td>2024-12-20T14:04</td>
//     </tr>
//   </tbody>
// </table>
//     )
// }
 
// export default Table;
 

// import React from 'react';

// const Table = () => {
//     return (
//         <div style={{ overflowY: 'auto', maxHeight: '400px' }} id="capture-table">
//             <table  className="table table-striped table-hover">
//                 <thead>
//                     <tr>
//                         <th><div className='col-6'>ID</div></th>
//                         <th scope="col">Sensor Name</th>
//                         <th scope="col">Temperature Value</th>
//                         <th scope="col">Time Stamp</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Humidity Sensor</td>
//                         <td>17.0</td>
//                         <td>2024-12-20T13:30</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Humidity Sensor</td>
//                         <td>15.0</td>
//                         <td>2024-12-20T11:00</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Humidity Sensor</td>
//                         <td>13.5</td>
//                         <td>2024-12-20T11:00</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">4</th>
//                         <td>Temperature Sensor</td>
//                         <td>29.5</td>
//                         <td>2024-12-20T15:04</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">5</th>
//                         <td>Temperature Sensor</td>
//                         <td>28.75</td>
//                         <td>2024-12-20T17:30</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">6</th>
//                         <td>Temperature Sensor</td>
//                         <td>28.0</td>
//                         <td>2024-12-20T13:31</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">7</th>
//                         <td>Temperature Sensor</td>
//                         <td>26.75</td>
//                         <td>2024-12-20T11:02</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">8</th>
//                         <td>Humidity Sensor</td>
//                         <td>30.0</td>
//                         <td>2024-12-20T12:03</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">9</th>
//                         <td>Humidity Sensor</td>
//                         <td>28.0</td>
//                         <td>2024-12-20T15:05</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">10</th>
//                         <td>Humidity Sensor</td>
//                         <td>27.5</td>
//                         <td>2024-12-20T17:10</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">11</th>
//                         <td>Humidity Sensor</td>
//                         <td>26.75</td>
//                         <td>2024-12-20T14:04</td>
//                     </tr>
//                     {/* Additional rows can go here */}
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Humidity Sensor</td>
//                         <td>17.0</td>
//                         <td>2024-12-20T13:30</td>
//                     </tr>
                    // <tr>
                    //     <th scope="row">2</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>15.0</td>
                    //     <td>2024-12-20T11:00</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">3</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>13.5</td>
                    //     <td>2024-12-20T11:00</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">4</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>29.5</td>
                    //     <td>2024-12-20T15:04</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">5</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>28.75</td>
                    //     <td>2024-12-20T17:30</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">6</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>28.0</td>
                    //     <td>2024-12-20T13:31</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">7</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>26.75</td>
                    //     <td>2024-12-20T11:02</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">8</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>30.0</td>
                    //     <td>2024-12-20T12:03</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">9</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>28.0</td>
                    //     <td>2024-12-20T15:05</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">10</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>27.5</td>
                    //     <td>2024-12-20T17:10</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">11</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>26.75</td>
                    //     <td>2024-12-20T14:04</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">1</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>17.0</td>
                    //     <td>2024-12-20T13:30</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">2</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>15.0</td>
                    //     <td>2024-12-20T11:00</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">3</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>13.5</td>
                    //     <td>2024-12-20T11:00</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">4</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>29.5</td>
                    //     <td>2024-12-20T15:04</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">5</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>28.75</td>
                    //     <td>2024-12-20T17:30</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">6</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>28.0</td>
                    //     <td>2024-12-20T13:31</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">7</th>
                    //     <td>Temperature Sensor</td>
                    //     <td>26.75</td>
                    //     <td>2024-12-20T11:02</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">8</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>30.0</td>
                    //     <td>2024-12-20T12:03</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">9</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>28.0</td>
                    //     <td>2024-12-20T15:05</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">10</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>27.5</td>
                    //     <td>2024-12-20T17:10</td>
                    // </tr>
                    // <tr>
                    //     <th scope="row">11</th>
                    //     <td>Humidity Sensor</td>
                    //     <td>26.75</td>
                    //     <td>2024-12-20T14:04</td>
                    // </tr>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td>Humidity Sensor</td>
//                         <td>17.0</td>
//                         <td>2024-12-20T13:30</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td>Humidity Sensor</td>
//                         <td>15.0</td>
//                         <td>2024-12-20T11:00</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td>Humidity Sensor</td>
//                         <td>13.5</td>
//                         <td>2024-12-20T11:00</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">4</th>
//                         <td>Temperature Sensor</td>
//                         <td>29.5</td>
//                         <td>2024-12-20T15:04</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">5</th>
//                         <td>Temperature Sensor</td>
//                         <td>28.75</td>
//                         <td>2024-12-20T17:30</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">6</th>
//                         <td>Temperature Sensor</td>
//                         <td>28.0</td>
//                         <td>2024-12-20T13:31</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">7</th>
//                         <td>Temperature Sensor</td>
//                         <td>26.75</td>
//                         <td>2024-12-20T11:02</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">8</th>
//                         <td>Humidity Sensor</td>
//                         <td>30.0</td>
//                         <td>2024-12-20T12:03</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">9</th>
//                         <td>Humidity Sensor</td>
//                         <td>28.0</td>
//                         <td>2024-12-20T15:05</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">10</th>
//                         <td>Humidity Sensor</td>
//                         <td>27.5</td>
//                         <td>2024-12-20T17:10</td>
//                     </tr>
//                     <tr>
//                         <th scope="row">11</th>
//                         <td>Humidity Sensor</td>
//                         <td>26.75</td>
//                         <td>2024-12-20T14:04</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Table;













import React, { useRef } from 'react';

const Table = () => {
    const tableRef = useRef(null);

    // Handle scroll event and log the scroll position
    const handleScroll = () => {
        if (tableRef.current) {
            console.log('Current scroll position:', tableRef.current.scrollTop);
        }
    };

    return (
        <div
            style={{ overflowY: 'auto', maxHeight: '400px' }}
            id="capture-table"
            ref={tableRef}
            onScroll={handleScroll}
        >
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th><div className='col-6'>ID</div></th>
                        <th scope="col">Sensor Name</th>
                        <th scope="col">Temperature Value</th>
                        <th scope="col">Time Stamp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Humidity Sensor</td>
                        <td>17.0</td>
                        <td>2024-12-20T13:30</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Humidity Sensor</td>
                        <td>15.0</td>
                        <td>2024-12-20T11:00</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Humidity Sensor</td>
                        <td>13.5</td>
                        <td>2024-12-20T11:00</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Temperature Sensor</td>
                        <td>29.5</td>
                        <td>2024-12-20T15:04</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Temperature Sensor</td>
                        <td>28.75</td>
                        <td>2024-12-20T17:30</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Temperature Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T13:31</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Temperature Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T11:02</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Humidity Sensor</td>
                        <td>30.0</td>
                        <td>2024-12-20T12:03</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">11</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">12</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">13</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">14</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">15</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">16</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">17</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">18</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">19</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">20</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">21</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">22</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">23</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">24</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">25</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">26</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">27</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">28</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">29</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">30</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">31</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">32</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">33</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">34</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">35</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">36</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">37</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">38</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">39</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">40</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">41</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">42</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">43</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">44</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">45</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">46</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">47</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">48</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">49</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">50</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">51</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">52</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">53</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">54</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">55</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">56</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">57</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">58</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">59</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                    <tr>
                        <th scope="row">60</th>
                        <td>Humidity Sensor</td>
                        <td>28.0</td>
                        <td>2024-12-20T15:05</td>
                    </tr>
                    <tr>
                        <th scope="row">61</th>
                        <td>Humidity Sensor</td>
                        <td>27.5</td>
                        <td>2024-12-20T17:10</td>
                    </tr>
                    <tr>
                        <th scope="row">62</th>
                        <td>Humidity Sensor</td>
                        <td>26.75</td>
                        <td>2024-12-20T14:04</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
