import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext';

function BreadcrumbMigas() {
  const {actualizaHistorial, historial}  = useContext(UserContext);
   
  return (
    <Breadcrumb className="mt-2">
      {historial.map((path,index)=>(
        <Breadcrumb.Item key={index} href={path}>
          {path.split("/")[path.split("/").length-1]}
          </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default BreadcrumbMigas;