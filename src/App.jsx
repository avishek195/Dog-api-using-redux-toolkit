import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "./redux/slice/dogSlice";

function App() {
  const imgSrc = useSelector((state) => state.dogs.dog);
  const dispatch = useDispatch();
  const datas = async () => {
    await dispatch(getDogs());
  };

  return (
    <div className="main-app">
      <h1>DOG API</h1>
      {imgSrc ? (
        <div className="main-container">
          <div className="image-container">
            <img src={imgSrc} alt="dogs" className="dog-img" />
          </div>
          <div className="btn-container">
            <button onClick={datas}>Next</button>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <button onClick={datas}>GetDogs</button>
        </div>
      )}
    </div>
  );
}

export default App;
