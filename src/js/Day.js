import React, { Component } from 'react';



class Day extends Component {
    state = {}
    currentMonthDays = 0;
    previousMonthDays = 0;
    nextMonthNumbers = 1;
    flag = false;

    date = new Date();
    monthLenght = new Date(this.date.getUTCFullYear(), this.date.getMonth() + 1, 0).getDate();
    todayDate = new Date(this.date.getFullYear(), this.date.getMonth()).getDate();
    startDayName = new Date(this.date.getFullYear(), this.date.getMonth()).getDay()


    componentDidUpdate() {
        this.currentMonthDays = 0;
        this.previousMonthDays = 0;
        this.nextMonthNumbers = 1;
    }


    render() {
        return (this.props.month.map(box => {

            if (box.id === this.startDayName) this.flag = true;
            if (this.flag) this.currentMonthDays++;
            if (this.flag === false) this.previousMonthDays++;
            if (this.currentMonthDays - 1 === this.monthLenght) {
                this.previousMonthDays = this.nextMonthNumbers
                this.nextMonthNumbers++
                this.flag = false;
            }


            return (
                <div
                    onClick={this.props.click}
                    key={box.id}
                    className={this.flag ? 'grid-item current-month' : 'grid-item another-month'}>
                    <div className='box-day-number'>
                        {this.flag ? this.currentMonthDays : this.previousMonthDays}
                    </div>
                </div>
            )
        }));
    }
}

export default Day;