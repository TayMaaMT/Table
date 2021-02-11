import { Tabs } from 'antd';
import Table from './Table';
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const Tab=()=>(
  
    <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="All" key="1">
      <Table/>
    </TabPane>
    <TabPane tab="Paid" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Unpaid" key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab="Overdue" key="4">
      Content of Tab Pane 4
    </TabPane>

    </Tabs>
)

export default Tab;