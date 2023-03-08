import Form from "react-bootstrap/Form";
import { useState } from "react";
import '../DateChart/dataChart.css'

const FormDate =()=> {
      

    let fechaFormateada = new Date().getMonth()+1 > 10 ? `${new Date().getFullYear()}-${new Date().getMonth()+1}`
    :`${new Date().getFullYear()}-0${new Date().getMonth()+1}`;

    const [date, setDate] = useState(fechaFormateada);
    
  return (
    <div className="formData">
      <Form.Select aria-label="Default select example">
       
        <option value="1">Pollo</option>
        <option value="2">Arroz</option>
        <option value="3">Huevo hervido</option>
      </Form.Select>
      <div className="col-md-12 dateForm">
      <Form.Group controlId="duedate">
              <Form.Control
                type="month"
                name="duedate"
                placeholder="Due date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                    //console.log(date)
                }}
                
              />
            </Form.Group>
          </div>
    </div>
  );
}

export default FormDate;
