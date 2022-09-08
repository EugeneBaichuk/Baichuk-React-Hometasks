import {useState, useEffect} from 'react';

import axios from 'axios';
//import request from 'superagent';

import Buttons from './component/Buttons';
import ItemsList from './component/List';

import './App.css';


function App() {
  //const arr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];
  const [arr, setArr] = useState('');
  const [formVal, setFormVal] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
// fetch('https://jsonplaceholder.typicode.com/albums')
      // .then(res => {
      //   if (!res.ok) {
      //     throw new Error(`Что-то пошло не так, status: ${res.status}`);
      //   } 
      //   return res.json()
      // })
      // .then(json => {
      //   const arr = json.map(item => item.title)
      //   const filteredArr = arr.filter(item => item.toLowerCase().includes(formVal.toLowerCase()));
      //   const filteredSortedArr = checked ? filteredArr.sort(): filteredArr; 
      //   setArr(filteredSortedArr);
      // })
      // .catch((error) => {
      //   console.error('Error:', error);
      // });

    axios
    .get('https://jsonplaceholder.typicode.com/albums')
    .then(res => {
      const arr = res.data.map(item => item.title)
      const filteredArr = arr.filter(item => item.toLowerCase().includes(formVal.toLowerCase()));
      const filteredSortedArr = checked ? filteredArr.sort(): filteredArr; 
      setArr(filteredSortedArr);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  // request
  //   .get('https://jsonplaceholder.typicode.com/albums')
  //   .then(res => {
  //     const arr = res.body.map(item => item.title)
  //     const filteredArr = arr.filter(item => item.toLowerCase().includes(formVal.toLowerCase()));
  //     const filteredSortedArr = checked ? filteredArr.sort(): filteredArr; 
  //     setArr(filteredSortedArr);
  //   })
  //   .catch(err => {
  //     console.error('Error:', err);
  //   });
  }, [checked, formVal]);

  
  const onFilter = (e) => {
    setFormVal(e.target.value);
  }

  const onSort = (_e) => {
    setChecked(sortedInfo => !sortedInfo);
  }

  const onReset = () => {
    setFormVal("");
    setChecked(false);
  }


  

  return (
    !!arr && (<div className="App">
      <div>
        <Buttons onReset={onReset} onFilter={onFilter} onSort={onSort} formVal={formVal} checked={checked}/>
        {<ItemsList arr={arr}/>}
      </div>
    </div>)
  );
}

export default App;
