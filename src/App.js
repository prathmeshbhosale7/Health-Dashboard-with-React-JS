import DashBoard from "./Components/DashBoard";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import SubDashBoard from "./Components/SubDashBoard";
import './styles/Main.css'

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="right-content">
          <SideBar />
          <div className="main-area">
            <DashBoard />
            <div className="subdash">
            <SubDashBoard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
