
import './App.css';
// import "./key";
import Axios from "axios";

function App() {
  const YOUR_APP_ID = "77bc63e7";
  const YOUR_APP_KEY ="1914e8e83e9d6d257298deb87fb855df";
  
  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes(){
  var result  = await Axios.get(url);
  console.log(result.data);
}

  return (
    <div className="App">
     <h1 onClick={getRecipes}>Hello Rajesh</h1>
    </div>
  );
}

export default App;
