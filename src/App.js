import './App.less';
import { Row, Col } from 'antd';
import DataTable from "./pages/DataTable";
import {TableProvider} from './TableContext'


function App() {
  return (
    
    <Row>
      <Col span={20} offset={2}>
        <TableProvider>
            <DataTable/>
        </TableProvider>

      </Col>
    </Row>
      
      

  );
}

export default App;
