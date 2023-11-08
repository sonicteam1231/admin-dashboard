import React, { useState } from 'react'; // Tambahkan import useState
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Persediaan from "./pages/persedian/Persedian";
import Dokumenls from "./pages/dokumenls/Dokumenls";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer"
import Permintaan from './pages/permintaan/Permintaan';
import Dashboard from './Dashboard';
import Permintaandua from './pages/permintaan/Permintaandua';


function App() {
  const [stylenav, setStylenav] = useState( 'sb-nav-fixed')
  const [nametable, setNametable] =useState('datatable-ascending')
  const [shortirtable, setShortirtable] = useState('ascending')

  const tablenameklik = () =>{
    if (nametable === "datatable-ascending") {
      setNametable("datatable-descending")
      setShortirtable("descending")
  } else{
      setNametable("datatable-ascending")
      setShortirtable("ascending")
  }
}




  const Layoutdua =()=>{
    
    const handleStyleChange = () => {
      // Toggle the style when the button in Navbar is clicked
      setStylenav((prevStyle) =>
        prevStyle === 'sb-nav-fixed'
          ? 'sb-nav-fixed sb-sidenav-toggled'
          : 'sb-nav-fixed'
      );
    };

    return(
      <div>
        <body className={stylenav}>
        <Navbar onStyleChange={handleStyleChange}/>
        
        <div id="layoutSidenav"> 
            <div id="layoutSidenav_nav">
                <Menu/>
            </div>
            <div id="layoutSidenav_content">
           
               <Outlet/>
               <Footer/>
            </div>
        </div>
   
    </body>
    </div>
    )
  }
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layoutdua />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/persediaan",
          element: <Persediaan />,
        },
        {
          path: "/dokumenls",
          element: <Dokumenls/>,
        },
        {
          path: "/permintaan",
          element: <Permintaan/>,
        },
        {
          path: "/permintaandua",
          element: <Permintaandua/>,
        },
      ]
    }
  ]);
  return (
     <RouterProvider router={router} />
  );
}

export default App;
