import smiley from './smiley.png'
import './App.css';




function App() {

  const handleClick = () => {
    window.open("https://www.undisclosedmedia.xyz");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img onClick={handleClick} src={smiley} className="App-logo" alt="logo" />
        <h1>Roman Bellisari</h1>
        <p>Welcome to the good side of the internet</p>
      </header>
    </div>
  );
}

export default App;
