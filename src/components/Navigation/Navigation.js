import React from "react";
import {NavLink} from "react-router-dom";

function Navigation(){
    return(
        <div className="nav">
            <nav className="navbar navbar-light bg-white fixed-top">
                <div className="container">
                    <a href="/#" className="navbar-brand logo">INTERNATIONAL
                        <br/>TAEKWONDO FEDERATION</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">INTERNATIONAL TAEKWONDO FEDERATION</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" >
                                <li className="nav-item fh">
                                    <a className="nav-link fh" aria-current="page" href="/#header">Главная</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fh" href="/#trainer">Тренеры</a>
                                </li>
                                <li>
                                    <a className="nav-link fh" href="/#about">О нас</a>
                                </li>
                                <li>
                                    <a className="nav-link fh" href="/#photo">Фото</a>
                                </li>
                                <li>
                                    <a className="nav-link fh" href="/#testimonials">Отзывы</a>
                                </li>
                                <li>
                                    <NavLink className="nav-link fh" to="/students">Посмотреть учеников</NavLink>
                                </li>
                                <li>
                                    <a className="nav-link fh" href="/#contact">Контакты</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;