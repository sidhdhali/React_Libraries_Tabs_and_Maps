import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MyMap from './MyMap';



const MyTabs = () =>
{

 
  return (
    <Tabs>
      <TabList>
        <Tab>About us</Tab>
        <Tab>Maps</Tab>
      </TabList>

      <TabPanel>
        <h2>We are the Wbs Coding School</h2>
        <img src='../assets/campus.jpg'/>
        <p>Our Campus is Awesome!</p>
      </TabPanel>
      <TabPanel>
        <h2>Augsburg Map</h2>
        <MyMap />
     
      </TabPanel>
    </Tabs>
  );
};

export default MyTabs;
