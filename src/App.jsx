import './App.css'
import Sidebar from "./layout/SideBar/Sidebar.jsx";
import Content from "./layout/Content/Content.jsx";

function App() {

  return (
      <>
          <div className='app'>
              <Sidebar/>
              <Content/>
          </div>
      </>
  )
}

export default App
