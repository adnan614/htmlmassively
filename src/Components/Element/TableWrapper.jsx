import React from 'react'
import TableRow from "./TableRow";

const TableWrapper = () => {
    return (
      <>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2"></td>
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </>
    );
}

export default TableWrapper
