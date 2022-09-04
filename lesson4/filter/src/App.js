import {useState} from 'react';

import Buttons from './component/Buttons';
import ItemsList from './component/List';
import './App.css';


function App() {
  const arr = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];
  const [formVal, setFormVal] = useState('');
  const [checked, setChecked] = useState(false);

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

  const filteredArr = arr.filter(item => item.toLowerCase().includes(formVal.toLowerCase()));
  const filteredSortedArr = checked ? filteredArr.sort(): filteredArr; 

  return (
    <div className="App">
      <div>
        <Buttons onReset={onReset} onFilter={onFilter} onSort={onSort} formVal={formVal} checked={checked}/>
        <ItemsList arr={filteredSortedArr}/>
      </div>
    </div>
  );
}

export default App;
