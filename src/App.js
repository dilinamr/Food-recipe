
import { useState } from 'react';
import './App.css';
import { Search } from './components/Search';

function App() {
  const [fooddata,setfooddata] = useState([]);
  return (
    <div className='app'>
    <Search fooddata={fooddata} setfooddata={setfooddata}/>
    {
      fooddata.map((item)=><h1 key={item.id}>{item.title}</h1>)
    }
    
    </div>
  );
}

export default App;
