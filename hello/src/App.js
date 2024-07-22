import logo from './logo.svg';
import './App.css';
import ParentComponent from './Components/ParentComponent';
import UserGreetings from './Components/UserGreetings';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './Components/Form'

function App() {
  return (
    <div className="App"> 
      {/* <ParentComponent /> */}
      {/* <UserGreetings /> */}
      {/* <NameList/> */}
      {/* <Stylesheet /> */}

      {/* Using Props */}
      {/* <Stylesheet primary={true} /> */}

      {/* <Inline/> */}

      <h2 className='error'>Error</h2> 
      {/* css modules */}
      <h2 className={styles.success}>Success</h2> 

      {/* FORM */}
      <Form/>
    </div>
  );
}

export default App;
