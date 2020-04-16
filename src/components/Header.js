import React from 'react'
import '../css/Header.css'
import logo from "../images/Trello-Logo.png"

function Header() {
    return(
        <nav className="navbar p-1">
            <ul className="header-part-1">
                <li className="mr-1">
                    <button className="btn btn-dark border-0 py-1 px-2">
                        <i className="fa fa-th align-middle"></i>
                    </button>
                </li>
                <li className="mr-1">
                    <button className="btn btn-dark border-0 py-1 px-2">
                        <i className="fa fa-home fa-lg"></i>
                    </button>
                </li>
                <li className="mr-1">
                    <button className="btn btn-dark border-0 py-1 px-2">
                        <i className="fa fa-trello fa-lg mr-2 align-middle"></i>
                        <span className='align-middle font-weight-bold'>Boards</span>
                    </button>
                </li>
                <li>
                    <div className="search-box">
                        <div className="input-group">
                            <input className="form-control bg-dark border-0 text-white" />
                            <div className="input-group-append">
                                <button className="btn border border-0 bg-dark py-1 px-2 search-icon" type="button">
                                    <i className="fa fa-search" style= {{color:'white'}}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="trello-logo">
                    <img src={logo} alt="" className='float-right'/>
                </li>
            </ul>
            <ul>
                <li className="mr-1">
                    <button className="btn btn-dark py-1 px-2">
                        <i className="fa fa-plus align-middle"></i>
                    </button>
                </li>
                <li className="mr-1">
                    <button className="btn btn-dark py-1 px-2">
                        <i className="fa fa-info-circle fa-lg"></i>
                    </button>
                </li>
                <li className="mr-1">
                    <button className="btn btn-dark py-1 px-2">
                        <i className="fa fa-bell"></i>
                    </button>
                </li>
                <button className="btn btn-dark rounded-circle text-light user-name">
                    <p className="align-middle">VJ</p>
                </button>
            </ul>
        </nav>
    )
}

export default Header