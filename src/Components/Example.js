import React from 'react';
import { Table } from 'reactstrap';
import Example2 from "./Example2"; 

const Example = (props) => {
  return (
    <Table  striped bordered hover>
      <thead>
        <tr>
          <th>TO DO</th>
          <th>DOING</th>
          <th>DONE</th>
        </tr>
      </thead>
      <tbody>
        <tr>

          <td><Example2 /></td>
          <td><Example2 /></td>
          <td><Example2 /></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example;