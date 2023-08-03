// import logo from './logo.svg';
// import './App.css';

// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  let darkMode = {
    color: 'white',
    backgroundColor: '#042743'
  }
  let lightMode = {
    color: 'black',
    backgroundColor: 'white'
  }
  let [mode, setMode] = useState('light')
  let [themeStyle, setThemeStyle] = useState(lightMode)
  let [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let toggleMode = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white'
      setMode("light")
      setThemeStyle(lightMode)
      showAlert("Light mode enabled", "success")
    }
    else {
      document.body.style.backgroundColor = '#042743'
      setMode("dark")
      setThemeStyle(darkMode)
      showAlert("Dark mode enabled", "warning")
    }
  }
  // i want to add a widget on navbar which have differnt colors and when i clock on relevent color it change the whole theme with same color ?
  return (
    <>
      <Navbar title="Text Utils Application" mode={mode} toggle={toggleMode} themeStyle={themeStyle} />
      <Alert alert={alert} />
      <TextForm heading="Enter Text to Anaylze" mode={mode} themeStyle={themeStyle} showAlert={showAlert} />
      {/* <About /> */}
    </>
  );
}

export default App;
