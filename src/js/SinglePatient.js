import React, { Component } from 'react';
import '../styles/SinglePatient.scss'



const SinglePatient = (props) => {

    return (
        <div >
            <section className='patient-wrapper'>
                {props.patients.map((person) => {
                    return (
                        <div key={person.email} className='patient-box' onClick={() => { props.click(person) }}>
                            <img src={person.smallImage} alt="" className={person.gender == "" ? "patient-box__img none" : person.gender == "male" ? "patient-box__img male" : "patient-box__img female"} />

                            <div className='patient-box__data'>
                                <h2 className='patient-box__data-name'>{person.name} {person.surname}</h2>
                                <div className='patient-box__data-gender-age'>
                                    <h4 className='patient-box__data-age'><span className='bold'>age: </span>{person.age}</h4>
                                    <h4 className='patient-box__data-gender'>{person.gender}</h4>
                                </div>

                                <p className='patient-box__data-email'>{person.email}</p>
                            </div>

                        </div>)
                })}
            </section>
        </div>
    )

}

export default SinglePatient;