import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* route added */}
      <Route path ="/" component={Homepage} exact />
      <Route path="/chats" component={chatpage} />
      
    </div>
  );
}

export default App;
