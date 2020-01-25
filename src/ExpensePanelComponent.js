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
          <tbody>
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
          </tbody>
        </Table>
      </div>
      <div className="row">
        <div
          className="col col-xs-8 offset-xs-2"
          style={{ backgroundColor: "rgb(245,245,245)" }}
        >
          <span>{moment().format("LL")}</span>
        </div>
        <Table responsive>
          <tbody>
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
          </tbody>
        </Table>
      </div>
      <div className="row">
        <div
          className="col col-xs-8 offset-xs-2"
          style={{ backgroundColor: "rgb(245,245,245)" }}
        >
          <span>{moment().format("LL")}</span>
        </div>
        <Table responsive>
          <tbody>
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
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExpensePanelComponent;
