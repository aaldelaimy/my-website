import './App.css';
import screenshot from './images/ayoob.jpg';

function App(){
  return(
    <div>
      <h1>Welcome to my webpage</h1> 
      <h2>About Me</h2>
      <b>this is bold </b><br></br>
      <i>woahhh</i>
      <ul>
        <li><bi>Coding</bi></li>
        <li><bi>Music</bi></li>
        <li><bi>Travelling</bi></li>
      </ul>
      <p>Welcome to my first React app.</p>
      <h2>My Skills</h2>
      <ol>
      <li>HTML & CSS</li>
    <li>JavaScript</li>
    <li>Python</li>
      </ol>
      <h3>My Favorite Websites</h3>
      <a href="https://www.youtube.com/watch?v=-3AmiKlbFLs">Visit Example Website</a>
      <div className="App">
        <h1>
          <img
            src={screenshot}
            alt="ayoob"
            className="image"
            />
        </h1>
      </div>
    </div>
  );
}
export default App;