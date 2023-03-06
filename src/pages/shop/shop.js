import React from 'react'
import { Card } from './Card'
import product1 from '../../assets/1.jpg'
export const Shop = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={product1} className="d-block w-100" alt="..." height={'550px'} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.britannica.com/31/166231-050-49A5F77F/Adoration-of-the-Shepherds-canvas-Giorgione-Samuel.jpg" className="d-block w-100" alt="..." height={'550px'} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.britannica.com/60/135360-004-EECDCBA6/Landscape-Mill-oil-canvas-Claude-Lorrain-Los.jpg?s=1500x700&q=85" className="d-block w-100" alt="..." height={'550px'} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Next  */}
            <br />
            <Card />
            <br />
            <hr />
            <h1>Get Latest on trends,best deals & exclusive offers!</h1>
            <div class="card text-center">
                <div class="card-header">
                   Contact
                </div>
                <div class="card-body">
                    <form>
                        <input type="email" placeholder='Enter your email' /><br /><br />
                        <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
                    </form>
                </div>
                <div class="card-footer text-muted">
                    <ul class="nav justify-content-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CustomerCare</a>
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <hr />

        </>
    )
}
