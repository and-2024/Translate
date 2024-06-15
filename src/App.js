
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#192c5d';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
   
<Navbar title="Truth-ware" aboutText="About" mode={mode} toggleMode ={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Textform showAlert={showAlert} heading="Write Anything..." mode={mode}/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
