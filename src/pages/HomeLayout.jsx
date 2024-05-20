import { Outlet } from "react-router-dom"

// components
import {Header, Navbar } from "../components"

function HomeLayout() {
  return (
  <>
   <Header/>
    <Navbar/>
    <main className="align-content py-20">
      <Outlet/>
    </main>
  </>
  )
}

export default HomeLayout