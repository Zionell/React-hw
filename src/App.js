import './App.css';
import {Message} from "./components/message/Message";

function App() {
    const text = "My first React App";
  return (
    <div className="App">
      <header className="App-header">
        <Message message={text}/>
      </header>
    </div>
  );
}

export default App;
