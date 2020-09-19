import React from 'react';
import { Table } from 'reactstrap';


const Example2 = (props) => {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Example2;