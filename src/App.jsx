import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("881819");
  const [isRenderedList, setRenderedList] = useState(false);

  // console.log(inputValue);

  return (
    <div className="App">
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRenderedList={isRenderedList}
        onFormsubmit={setRenderedList}
      />
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRenderedList={isRenderedList}
      />
    </div>
  );
}

export default App;
