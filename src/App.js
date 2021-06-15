import logo from './logo.svg';
import './App.css';
import Person from './Person'

function App() {
  const people = ["Raquel", "Brian", "Iryna", "Brain", "Megan", "Taulant", "Philip", "Charlene"]
  const weather = ["sunny", "sunny", "cloudy", "raining", "stroms", "windy", "tornado", "snowing"] 

  function renderPeople(){
    return people.map((person,idx) =>  <Person name={person} weather={weather[idx]}/>)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {people.length === 0 ? "No people yet" : renderPeople()}
      </header>
    </div>

  );
}

export default App;
