import './App.css'
import SideBar from "./layout/SideBar/SideBar.jsx";
import Content from "./layout/Content/Content.jsx";

function App() {

  return (
      <>
          <div className='app'>
              <SideBar/>
              <Content/>
          </div>
      </>
  )
}

export default App
