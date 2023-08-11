import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Footer from './Components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
