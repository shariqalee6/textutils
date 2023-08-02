// import logo from './logo.svg';
// import './App.css';

import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title ="Text Utils Application"/>
      {/* <TextForm heading="Enter Text to Anaylze" /> */}
      <About />
    </>
  );
}

export default App;
