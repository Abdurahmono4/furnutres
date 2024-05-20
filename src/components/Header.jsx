import { Link } from "react-router-dom"

import {signOut } from "firebase/auth";
import { useSelector } from "react-redux"
import {auth} from "../firebase/firebaseConfig"

function Header() {
  const {user} =useSelector((state)=> state.userState)
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-content flex justify-center sm:justify-end">
            {/* User */}
            {/* Links */}
          <div className="flex gap-x-6 justify-center items-center sm:justify-end">
              {! user &&(
                <>
                  <Link to="/login" className="link link-hover text-xs sm:textsm">Sign in / Guest</Link>
                  <Link to="/register" className="link link-hover text-xs sm:textsm">Create an Account</Link>
                </>
              )}
              {user && (
                <>
                  <p className="text-xs sm:text-sm">Hello,demo user{user.dislayName}</p>
                  <button className="btn btn-xs btn-outline btn-primary" onClick={()=> signOut(auth)}>
                    Logout
                    </button>
                </>
              )}
           </div>
      </div>
    </header>
  )
}

export default Header