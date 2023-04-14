// Fetch 200 osób z https://randomuser.me/
// Dodać state z tablicą zmapowaną z potrzebnymi danymi
// Dodać state z datą wizyty do każdej osoby
// Dodać state z opisem każdej osobie

// Dodać state dark mode i podłączyć do header mode

// W base zrobić system wyszukiwania

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom'
import '../styles/App.scss'
import Header from './Header';
import Base from './Base';
import Callendar from './Callendar';
import AddPatient from './AddPatient';
import Home from './Home';



class App extends Component {
  state = {
    patients: [],
    mode: true,
    activeClass: "dark-mode",
  }
  ilnesses = {};
  patients = [];



  handleAddPatient = (patient) => {
    this.patients.push(patient);
    console.log('dodaje pacjenta');
    this.setState({
      patients: this.patients,
    })
    console.log('dodany');


  }

  drawRandomDescription() {
    const number = Math.floor(Math.random() * 10);
    return this.ilnesses.choroby[number].objawy[0]

  }

  fetchPatients = () => {
    // console.log('działam');
    fetch('https://randomuser.me/api/?results=200')
      .then(people => people.json())
      .then(items => items.results.map((item) => {
        this.patients.push({
          gender: item.gender,
          title: item.name.title,
          name: item.name.first,
          surname: item.name.last,
          age: item.registered.age,
          email: item.email,
          city: item.location.city,
          country: item.location.country,
          smallImage: item.picture.medium,
          bigImage: item.picture.large,
          filter: `${item.name.first} ${item.name.last}`,
          description: this.drawRandomDescription(),
        })
      }))
    this.setState({
      patients: this.patients
    })



  }
  handleModeChange = () => {
    if (this.state.mode) {
      this.setState({
        mode: false,
        activeClass: "light-mode"
      })
    } else {
      this.setState({
        mode: true,
        activeClass: "dark-mode"
      })
    }
  }



  componentDidMount() {
    fetch('/choroby.json')
      .then(data => data.json())
      .then(data => this.ilnesses = data)
    this.fetchPatients()
  }

  render() {
    // console.log(this.patients);
    // console.log(this.ilnesses);


    return (
      <Router>
        <div className={this.state.mode ? "dark-mode app" : "light-mode app"}>
          <header>
            <Header mode={this.state.mode} click={this.handleModeChange} />
          </header>
          <main>
            <Routes>
              <Route path='/base' element={<Base patients={this.state.patients} />} />
              <Route path='/callendar' element={<Callendar />} />
              <Route path='/add-patient' element={<AddPatient new={this.newPatient} submit={this.handleAddPatient} />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App