import React from 'react'
import butlerLogo from '../images/butler.png'

function BoardHeader(props) {
    return (
        <header className="navbar board-details px-2">
            <ul>
                <li className="mr-2">
                    <span id="board-name">{props.boardName}</span>
                </li>
                <li>
                    <button className="btn btn-dark py-1 px-2">
                        <i className="fa fa-star-o"></i>
                    </button>
                </li>
                <li className="text-secondary h5 mx-2">|</li>
                <li>
                    <button className="btn btn-dark py-1 px-2">
                        Personal
                    </button>
                </li>
                <li className="text-secondary h5 mx-2">|</li>
                <li>
                    <button className="btn btn-dark py-1 px-2">
                        <i className="fa fa-lock fa-lg mr-2"></i>
                        <span>Private</span>
                    </button>
                </li>
                <li className="text-secondary h5 mx-2">|</li>
                <li>
                    <button className="btn btn-dark py-1 px-2">
                        Invite
                    </button>
                </li>
            </ul>
            <ul>
                <li>
                    <button className="btn btn-dark py-1 px-2 mr-1">
                        <img src={butlerLogo} alt="" className="mr-2" style={{width:'1.5em'}} />
                        Butler
                    </button>
                </li>
                <li>
                    <button className="btn btn-dark py-1 px-2 menu">
                        <i className="fa fa-ellipsis-h mr-2"></i>
                        Show Menu
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default BoardHeader