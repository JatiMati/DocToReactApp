import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import '../styles/Callendar.scss';
import Day from './Day';

class Callendar extends Component {
    state = {
        month: [],
        monthNumber: new Date().getMonth(),
        yearNumber: new Date().getUTCFullYear(),
    }

    gridBoxes = [];

    monthStartingDay = new Date(this.state.yearNumber, this.state.monthNumber).getDay();
    monthLength = new Date(this.state.yearNumber, this.state.monthNumber + 1, 0).getDate();




    createMonth = () => {
        this.gridBoxes = [];
        this.monthLength = new Date(this.state.yearNumber, this.state.monthNumber + 1, 0).getDate();
        this.monthStartingDay = new Date(this.state.yearNumber, this.state.monthNumber).getDay();

        if ((this.monthLength = 31 && this.monthStartingDay >= 5) || (this.monthLength = 30 && this.monthStartingDay >= 6)) {
            // console.log('ok');

            for (let i = 0; i < 42; i++) {
                this.gridBoxes.push({ id: i, name: `Object ${i}` });
            }
        }
        else {
            for (let i = 0; i < 35; i++) {
                this.gridBoxes.push({ id: i, name: `Object ${i}` });
            }
        }
        this.setState({
            month: this.gridBoxes,
        })

        console.log(this.state.monthNumber);
        console.log(this.state.yearNumber);
    }

    showOnClick = () => {
        console.log(this.state.month.id);

    }

    componentDidMount() {
        this.createMonth()
    }

    handleDecreaseMonth = () => {
        if (this.state.monthNumber >= 0) {
            this.setState({
                monthNumber: this.state.monthNumber - 1
            })
            if (this.state.monthNumber === 0) {
                this.setState({
                    yearNumber: this.state.yearNumber - 1,
                    monthNumber: 11,
                })
            }
        }

        this.createMonth()
    }

    handleIncreaseMonth = () => {
        console.log('działam');
        console.log(this.state.monthNumber);
        if (this.state.monthNumber <= 11) {
            this.setState({

                monthNumber: this.state.monthNumber + 1

            })
            if (this.state.monthNumber === 11) {
                this.setState(
                    {
                        yearNumber: this.state.yearNumber + 1,
                        monthNumber: 0,


                    })
            }
        }
        console.log(this.state.monthNumber);
        this.createMonth()
        console.log(this.state.monthNumber);
    }

    render() {
        console.log(this.state.monthNumber);

        return (
            <div>
                <section className='background'>
                    <div className="callendar-day-names">
                        <div className='callendar-day-name'>Sunday</div>
                        <div className='callendar-day-name'>Monday</div>
                        <div className='callendar-day-name'>Thursday</div>
                        <div className='callendar-day-name'>Wednesday</div>
                        <div className='callendar-day-name'>Tuesday</div>
                        <div className='callendar-day-name'>Friday</div>
                        <div className='callendar-day-name'>Saturday</div>
                    </div>
                    <div className='callendar-wrap'>
                        <Day month={this.state.month} click={this.showOnClick} />
                    </div>
                    <div className='callendar-arrows'>
                        <i className="fa-solid fa-circle-chevron-left" onClick={this.handleDecreaseMonth}></i>
                        <i className="fa-solid fa-circle-chevron-right" onClick={this.handleIncreaseMonth}></i>
                    </div>
                </section>
            </div>
        );
    }
}

export default Callendar;