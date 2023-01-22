import Navbar from './Components/Navbar/Navbar';
import './App.css';
import AllRoutes from './Components/Routes/AllRoutes';
import Footer from './Components/Footer';

// import LoginDrawer from './Components/LoginDrawer';

function App() {
  return (
    <div className="App">
      {/* <NavBanner/> */}
      <Navbar/>
      <AllRoutes/>
      {/* <LoginDrawer/> */}
      <Footer/>
    </div>
  );
}

export default App;
