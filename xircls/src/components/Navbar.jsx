import React from "react";

const Navbar = () => {
    return(
        <>
<div className="navbar bg-transparent lg:z-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>About Us</a>
        </li>
        <li><a>Blogs</a></li>
        <li><a>Products</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl"><img src="src/assets/Navbarlogo.png" className="w-30 h-14 -ml-8 lg:ml-[8rem]"/>
 </a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-5 text-xl text-black">
      <li className="mx-4 "><a>Home</a></li>
      <li className="mx-4"><a>About Us</a></li>
      <li className="mx-4"><a>Blogs</a></li>
      <li className="mx-4"><a>Products</a></li>
    </ul>
  </div>
  <div className="navbar navbar-end">
    <a className="btn btn-primary mx-4">Login</a>
    <a className="btn bg-[#f8fafc] lg:mr-[8rem] text-black hover:text-white">Sign Up</a>
  </div>
</div>
        </>
    )
}

export default Navbar