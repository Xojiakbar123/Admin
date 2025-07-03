import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import './App.css'
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [activePage, setActivePage] = useState("dashboard")

  const renderContent = () => {
  switch(activePage){
    case "dashboard":
      return <Dashboard/>;
    case "widgets":
      return <div>Widgets</div>;
    case "tables":
      return <div>Tables</div>;
    case "charts":
      return <div>Charts</div>;
    default:
      return <div>Select Page</div>;
  }
};


  return(
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar onNavigate={setActivePage} />
      <div style={{ flex: 1, padding: "20px" }}>
        {renderContent()}
      </div>
    </div>
  )
}

export default App
