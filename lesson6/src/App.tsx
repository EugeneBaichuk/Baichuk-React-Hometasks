import React from 'react';
import { useState } from "react";
import axios from "axios";

import ContainedButton from './components/Button';
import NameInput from './components/Input';
import UserCard from './components/Card';
import Card from '@mui/material/Card';

import './App.css';

function App() {
  const [name, setName] = useState<string>("");
  const [resName, setResName] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  const onNameChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onGetAge: React.ReactEventHandler = (_e) => {
    const axiosPersonInfo = async () => {
      const [nameAgeRes, genderRes, countryRes] = await Promise.all([
        axios.get(`https://api.agify.io/?name=${name || "noName"}`),
        axios.get(`https://api.genderize.io/?name=${name || "noName"}`),
        axios.get(`https://api.nationalize.io/?name=${name || "noName"}`)
      ]);
      return [nameAgeRes, genderRes, countryRes];
    }

    axiosPersonInfo().then(([nameAgeRes, genderRes, countryRes])=> {
      const age = nameAgeRes.data.name === name ? nameAgeRes.data.age : "Введите Имя";
      const gender = genderRes.data.name === name ? genderRes.data.gender : "Введите Имя";
      const country = countryRes.data.name === name ? countryRes.data.country[0].country_id : "Введите Имя";
      setAge(age);
      setGender(gender);
      setCountry(country);
      setResName(name);
    }).catch(err => {
      console.error(err);
      alert(`Упс, что-то пошло не так. Попробуйте ввести другое имя. \n Текст ошибки: ${err.message}`);
    });
  };

  return (
    <div className="App">
      <Card sx={{ maxWidth: 345, margin: "20px auto 50px", pb:"40px"}}>
        <NameInput onNameChange={onNameChange} name={name}/>
        <ContainedButton onGetAge={onGetAge}/>
      </Card>
      <UserCard name={resName} age={age} gender={gender} country={country}/>
    </div>
  );
}

export default App;
