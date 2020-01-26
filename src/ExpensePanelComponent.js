import React from "react";
import moment from "moment";
import { Table } from "react-bootstrap";

const ExpensePanelComponent = params => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col col-xs-8 offset-xs-2"
          style={{ backgroundColor: "rgb(245,245,245)" }}
        >
          <span>{moment().format("LL")}</span>
        </div>
        <Table responsive>
          {/* <tbody>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody> */}
          <div class="list-group">
            <button type="button" class="list-group-item" onClick={()=> alert("this should activate the modal for shit")}>
              Cras justo odio
            </button>
            <button type="button" class="list-group-item">
              Dapibus ac facilisis in
            </button>
            <button type="button" class="list-group-item">
              Morbi leo risus
            </button>
            <button type="button" class="list-group-item">
              Porta ac consectetur ac
            </button>
            <button type="button" class="list-group-item">
              Vestibulum at eros
            </button>
          </div>
        </Table>
      </div>
      <table class="table table-condensed table-bordered">
        <caption>List of stuff</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div class="list-group">
        <button type="button" class="list-group-item">
          Cras justo odio
        </button>
        <button type="button" class="list-group-item">
          Dapibus ac facilisis in
        </button>
        <button type="button" class="list-group-item">
          Morbi leo risus
        </button>
        <button type="button" class="list-group-item">
          Porta ac consectetur ac
        </button>
        <button type="button" class="list-group-item">
          Vestibulum at eros
        </button>
      </div>
    </div>
  );
};

export default ExpensePanelComponent;
