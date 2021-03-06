import './App.css';
import ParlerMap from './components/map/ParlerMap'
import NavBar from './components/navBar/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <br />
        <h1>Map</h1>
        <p>*Coming soon - once Parler data is made available to the public*</p>
        <ParlerMap />
        <br />
        <br />
        <a href="https://github.com/ryand1011" target="_blank" rel="noreferrer">Created by @ryand1011</a>
        <br />
        <a href="https://github.com/ryand1011/parler-map" target="_blank" rel="noreferrer">Contribute on Github</a>
        <br />
      </div>
    </div>
  );
}

export default App;
