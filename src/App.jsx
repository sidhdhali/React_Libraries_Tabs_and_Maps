import Instructions from './instructions/Instructions';
import './styles.css';
import MyTabs from './instructions/MyTabs';



export default function App()
{
  
  return (
    <div className='App'>
      <Instructions />
      <div className='block'>Insert your components here:
        
        <MyTabs />
     
      </div>
    </div>
  );
}
