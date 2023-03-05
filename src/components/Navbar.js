import React from 'react'
import {Link} from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './Nabar.scss'
export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            
            <a className="navbar-brand" href="#">Brand</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
       <div className="container-fluid">
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
             <Link className="nav-link active" to="/">Home</Link>
               {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
             </li>
             <li className="nav-item">
             <Link className="nav-link active" to="/product">Products</Link>
               {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
             </li>
             </ul>
             <ul className="nav justify-content-end">

               <form className="d-flex" role="search">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
                      <li className="nav-item">
                      <Link className="nav-link active" to="/Signin">Sign in</Link>
             </li>
                     <li className="nav-item">
                     <Link className="nav-link active" to="/Cart">
                      <ShoppingCart size={32}/>
                     </Link>
             </li>
           </ul>
         
         </div>
       </div>
     </nav>
     {/* <div className="image">
     <img src="..." className="rounded mx-auto d-block" alt="..."/>
     </div> */}
     </>
  )
}
