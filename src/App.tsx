import './App.css'
import Navbar from "./components/Navbar"
import Home from  "./components/Home"
import Services from "./components/Services"
import Banners from "./components/Banners"
import Vedio from "./components/Vedio"
import Activity from "./components/Activity"
import Clients from "./components/Clients"
import MyFooter from "./components/MyFooter"

function App() {
 
  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <Banners/>
     <Vedio/>
     <Activity/>
     <Clients/>
     <MyFooter/>
    </>
  )
}

export default App
