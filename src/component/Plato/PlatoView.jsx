import React from "react";

import Search from "../Serach/Search";
import Form from "react-bootstrap/Form";
import TableGeneral from "../Table/TableList";

export default function PlatoView() {
  return (
    <div>
      <Search></Search>
      <div className="col-6 m-3">
        <Form.Select aria-label="Default select example">
          <option value="1">Gramos</option>
          <option value="2">Unidad</option>
         
        </Form.Select>
      </div>
      <div className="col-8 m-3 containerTablePlato">
        <TableGeneral />
      </div>
    </div>
  );
}
