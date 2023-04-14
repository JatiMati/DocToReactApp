//przenieść state mode do app

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import '../styles/Header.scss'

class Header extends Component {
    state = {
        // mode: true,
    }



    render() {
        return (
            <div >
                <div className='header'>
                    <NavLink to='/'>
                        <div className='header__logo'>
                            <i className="fa-solid fa-stethoscope header__logo-icon"></i>
                            <p className='header__logo-text'>DocTo</p>
                        </div>
                    </NavLink>
                    <div className='header__menu'>
                        <NavLink to='/base'><div className="header__menu-item">Patients base</div></NavLink>
                        <NavLink to='/callendar'><div className="header__menu-item">Callendar</div></NavLink>
                        <NavLink to='/add-patient'><div className="header__menu-item">Add Patient</div></NavLink>

                    </div>
                    <div className='header__mode' onClick={this.props.click}>

                        {this.props.mode ?
                            <i className="fa-solid fa-lightbulb header__mode-icon"></i> :
                            <i className="
                            fa-regular fa-lightbulb header__mode-ico"></i>}
                        <p className='header__mode-text'>{this.props.mode ? "light mode" : "dark mode"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;