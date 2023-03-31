import React from "react";

import Search from "../Serach/Search";
import Form from "react-bootstrap/Form";
import TableGeneral from "../Table/TableList";

export default function PlatoView() {
  return (
    <div>
      <h4>Platos</h4>
      <hr />
      <div style={{margin:"30px",marginLeft:"15%"}}>
      <Search></Search>
      <div className="col-6 m-3">
        <Form.Select aria-label="Default select example">
          <option value="1">Gramos</option>
          <option value="2">Unidad</option>
         
        </Form.Select>
      </div>
      <div className="col-10 m-3 containerTablePlato">
        <TableGeneral />
      </div>

      </div>
    </div>
  );
}
