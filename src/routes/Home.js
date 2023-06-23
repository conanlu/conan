import 'Default.css';
import logo from 'logo.svg';
import ensemble from 'ensemblepic.png';

export default function Home() {

  const pic = require("images/conan.jpg");

  return (
    <div className="App">
      <header className="home">
        <h1>hi this is conan!</h1>
        <p>i study computer science & philosophy at harvard.</p>
        <br></br>
        <p>this summer, i'm working on software solutions at infosys <br></br>and researching surveillance harms at STOP.</p>

        <img src={pic} height="250" />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>


        <img src={logo} className="App-logo" alt="logo" />
        <img src={ensemble} alt="logo" /> */}


      </header>
      
    </div>
  );
}
