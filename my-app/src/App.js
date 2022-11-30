import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

/* 
  Functional component
  as we've only got one 'root' div index.html, going to use this as the
  parent component 
*/
function App() {
  return (
    <div className="App">
      {/*
      as this component is independent and won't have any other content except
      what it renders itself, it doesn't need a closing tag, just a self-closing 
      if components wrap other components, close them with a </> tag 
      */}
      <FunctionalGreeting />
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
