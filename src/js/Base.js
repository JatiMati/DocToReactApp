import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import '../styles/Base.scss';
import SinglePatient from './SinglePatient';


class Base extends Component {
    state = {
        profilePop: false,
        patients: this.props.patients,
        searchValue: "",
    }

    filteredPatients = [];

    handlePatientClick = (data) => {
        // console.log('elo');
        // console.log(data);
        this.setState({
            profilePop: true,
        })
        this.clickedPatient = data;
    }

    showPopUp = (patient) => {
        return (
            <div className='profile-pop-bc' >

                <div className='profile-pop__data' >
                    <i className="fa-solid fa-xmark" onClick={() => { this.setState({ profilePop: false, }) }}></i>
                    <div className='profile-pop__flex1'>
                        <img src={patient.bigImage} alt="Patient picture" />
                        <div className='data__name'>{patient.title} {patient.name} {this.clickedPatient.surname}</div>
                    </div>

                    <div className='description-flex-wrap'>
                        <div className='profile-pop__flex2'>
                            <p><span className='bold'>Age: </span>{patient.age === "" ? "-" : patient.age}</p>
                            <p><span className='bold'>{patient.gender === "" ? "Gender: -" : patient.gender}</span></p>
                            <p><span className='bold'>Country: </span>{patient.country === "" ? "-" : patient.country}</p>
                            <p><span className='bold'>City: </span>{patient.city === "" ? "-" : patient.city}</p>
                            <p><span className='bold'>Email: </span>{patient.email === "" ? "-" : patient.email}</p>
                        </div>

                        <div className='profile-pop__flex3'>
                            <p><span className='bold'>Description: </span>{patient.description === "" ? "-" : patient.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

    handleChangeText = (e) => {
        this.filteredPatients = this.props.patients.filter(patient => {
            return patient.filter.toLowerCase().includes(e.target.value.toLowerCase());
        })

        this.setState(prevState => ({
            searchValue: e.target.value,
            patients: this.filteredPatients
        }))
        // console.log(this.state.patients);
        if (e.target.value === "") {
            this.setState({
                patients: this.props.patients,
            })
        }

    }
    render() {
        return (
            <div className='base-wrapper'>
                <input
                    placeholder='search... '
                    type="text"
                    name="search"
                    value={this.state.searchValue}
                    onChange={this.handleChangeText}
                />
                <div className='patients-wrapper'>
                    < div className='patients-wrapper-size' >
                        <SinglePatient
                            patients={this.state.patients}
                            searchValue={this.state.searchValue}
                            className="base__items"
                            click={this.handlePatientClick} />
                    </div >
                </div>
                {this.state.profilePop ? this.showPopUp(this.clickedPatient) : null}
            </div>
        );
    }
}

export default Base;