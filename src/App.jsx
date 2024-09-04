import "./App.css";
import Header from "./components/Header";
import Buttons1 from "./components/Buttons1";
import Buttons2 from "./components/Buttons2";

function App() {
  return (
    <>
      <div className="container flex justify-center h-screen items-center flex-col">
        <div className="classname border-2 border-gray-700 rounded-lg h-auto w-auto text-center p-10">
          <Header></Header>
          <Buttons1></Buttons1>
          <Buttons2></Buttons2>
        </div>
      </div>
    </>
  );
}

export default App;
