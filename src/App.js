import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App">
      
      <Header /> 
      <div className="content">
        <Main /> 
      </div>
      <Footer /> 

    </div>
  );
}

export default App;
