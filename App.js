import React,{useState} from "react";
import Reach from "react";
import "./App.css";

const apiKey= "e81c6cf5-a0bd-4149-aac8-26e4a6d81d47";
const url="https://api.thecatapi.com/v1/images/search";

function App() {

const [catUrl, setCatUrl] = useState('testing');

const getCat = () => {
  console.log('Welcome');


fetch(url)
  .then((res) => res.json())
  .then((cats) => {
    console.log("Cats:", cats);
    const catUrl = cats[0].url;

    setCatUrl(catUrl);

  })
  .catch((error) => {
    console.log("Error:", error);
  });
}
console.log("Cat URL:",catUrl);

  // JSX
  return (
    <div className="app">
      <h1>Cat API</h1>
      <img src={catUrl} />
    <button onClick={getCat}>Click for more cats!</button>
    </div>
  );
}

export default App;


