import logo from './logo.svg';
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";


import './App.css';

function App() {
  return (
   <> 
   
<Navbar 
title="TextUtils"
aboutText="About TextUtils" />
<div className="conatiner">
  <TextForm heading="enter the text to analyze"/>

</div>

</>
  );
}



export default App;
