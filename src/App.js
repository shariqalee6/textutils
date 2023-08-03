// import logo from './logo.svg';
// import './App.css';

// import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

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

  let toggleMode = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = 'white'
      setMode("light")
      setThemeStyle(lightMode)
    }
    else {
      document.body.style.backgroundColor = '#042743'
      setMode("dark")
      setThemeStyle(darkMode)
    }
  }
  // i want to add a widget on navbar which have differnt colors and when i clock on relevent color it change the whole theme with same color ?
  return (
    <>
      <Navbar title="Text Utils Application" mode={mode} toggle={toggleMode} themeStyle={themeStyle} />
      <TextForm heading="Enter Text to Anaylze" mode={mode} themeStyle={themeStyle} />
      {/* <About /> */}
    </>
  );
}

export default App;
