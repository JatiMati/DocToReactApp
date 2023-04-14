import React, { Component } from 'react';
import '../styles/Home.scss'



class Home extends Component {
    state = {
        adtiveHover: false
    }


    handleHoverOn = () => {
        this.setState({
            activeHover: true,
        })
    }
    handleHoverOff = () => {
        this.setState({
            activeHover: false,
        })
    }
    render() {
        return (
            <div className='background'>
                <div className={this.state.activeHover ? 'wave3 fastAnim3' : 'wave3 slowAnim3'}></div>
                <div className={this.state.activeHover ? 'wave4 fastAnim4' : 'wave3 slowAnim4'}></div>
                <div className={this.state.activeHover ? 'wave2 fastAnim2' : 'wave2 slowAnim2'}></div>
                <div className={this.state.activeHover ? 'wave fastAnim1' : 'wave2 slowAnim1'}></div>
                <div className='home'>
                    <i className={this.state.activeHover ? "fa-solid fa-stethoscope home__logo-icon fastBeat" : "fa-solid fa-stethoscope home__logo-icon slowBeat"} onMouseEnter={this.handleHoverOn}
                        onMouseLeave={this.handleHoverOff}
                    ></i>
                    <p className='home__logo-text'>
                        <span>D</span>
                        <span>o</span>
                        <span>c</span>
                        <span>T</span>
                        <span>o</span>
                    </p>
                </div>
            </div >

        )
    }
}

export default Home;
