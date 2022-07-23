import './App.css';
import List from './List';
import Data from "./Data"
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(Data)
  return (
    <main className='container'>
      <section>
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])} className="clear-btn">Clear All</button>
      </section>
    </main>
  )
}

export default App;
