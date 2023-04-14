import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import '../styles/AddPatient.scss';

class AddPatient extends Component {
    state = {
        patientTitle: "",
        patientName: "",
        patientLastName: "",
        patientAge: "",
        patientCity: "",
        patientCountry: "",
        patientEmail: "",
        patientDescription: "",
        patientSex: "",


        slided: true,
    }



    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.patientName === "" || this.state.patientLastName === "") {
            alert("You must fill Name and Last Name")
        }
        else {
            const buildedPatient = {
                gender: this.state.patientSex,
                title: this.state.patientTitle,
                name: this.state.patientName,
                surname: this.state.patientLastName,
                age: this.state.patientAge,
                city: this.state.patientCity,
                country: this.state.patientCountry,
                email: this.state.patientEmail,
                description: this.state.patientDescription,
                smallImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                bigImage: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                filter: `${this.state.patientName} ${this.state.patientLastName}`,
            }
            this.props.submit(buildedPatient)
            this.setState({


                slided: !this.state.slided,

            })
            setTimeout(() => {
                this.setState({
                    patientTitle: "",
                    patientName: "",
                    patientLastName: "",
                    patientAge: "",
                    patientCity: "",
                    patientCountry: "",
                    patientEmail: "",
                    patientDescription: "",
                    patientSex: "",
                    slided: !this.state.slided,
                })

            }, 1000);

        }
    }

    handleChange = (e) => {
        console.log(e.target.value);
        // console.log(e.target.name);
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })

    }
    render() {
        // console.log(this.state.patient);

        return (
            <div className='background add'>
                <div className={this.state.slided ? 'add-form slideIn' : 'add-form slideOut'}>
                    <form onSubmit={(e) => { this.handleSubmit(e) }} noValidate>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="title">Title:</label>
                            <input
                                type="text"
                                id='title'
                                name='patientTitle'
                                value={this.state.patientTitle}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id='name'
                                name='patientName'
                                value={this.state.patientName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id='lastName'
                                name='patientLastName'
                                value={this.state.patientLastName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="age">Age:</label>
                            <input
                                type="text"
                                id='age'
                                name='patientAge'
                                value={this.state.patientAge}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='radio-label-container' >
                            <label className='form-part radio-label' htmlFor="id" onChange={this.handleChange}>
                                <div className='radio-option'>
                                    <input
                                        className='radio-input'
                                        type="radio"
                                        id='sex'
                                        name="patientSex"
                                        value="Male" />

                                    <label className='radio' htmlFor="sex">Male</label>
                                </div>
                                <div className='radio-option'>
                                    <input
                                        className='radio-input'
                                        type="radio"
                                        id='sex'
                                        name="patientSex"
                                        value="Female" />
                                    <label className='radio' htmlFor="sex">Female</label>
                                </div>
                            </label>
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="country">Country: </label>
                            <input
                                type="text"
                                id='country'
                                name='patientCountry'
                                onChange={this.handleChange}
                                value={this.state.patientCountry}
                            />
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="city">City:</label>
                            <input
                                type="text"
                                id='city'
                                name='patientCity'
                                onChange={this.handleChange}
                                value={this.state.patientCity}
                            />
                        </div>

                        <div className='label-container' >
                            <label className='form-part' htmlFor="email">Email: </label>
                            <input
                                type="email"
                                id='email'
                                name='patientEmail'
                                onChange={this.handleChange}
                                value={this.state.patientEmail}
                            />
                        </div>

                        <div className='label-container'>
                            <label className='form-part' htmlFor="description">Description:</label>
                            <textarea
                                name="patientDescription"
                                id="description"
                                value={this.state.patientDescription}
                                onChange={this.handleChange}
                            >
                            </textarea>
                        </div>
                        <div>
                            <div className='submitButton'>
                                <div>
                                    <button className={this.state.slided ? 'spinLoad' : ""} type='submit'><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default AddPatient;