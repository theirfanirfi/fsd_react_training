import {useState} from 'react';
import MyStore from './pages/MyStore.js'
// import TwentyAge from './components/TwentyAge.js'
// import EighteenAge from './components/EighteenAge.js'

function App (){
  // const [name, setName] = useState('No Value');
  // const [age, setAge] = useState(18);

  // const changeAge = (v) => {
  //   setAge(v);
  // }
  
  return (
    <MyStore/>
    // <div>
    // <input style={{margin:20, borderWidth: 2,borderColor: "red"}} 
    // type="text" placeholder="What is your name?"
    // onChange={(e) => {
    //   let changedValue = e.target.value;
    //   setName(changedValue);

    // }}
    // />

    // <select onChange={(e) => setAge(e.target.value)}>
    //   <option value={18}>18</option>
    //   <option value={19}>19</option>
    //   <option value={20}>20</option>
    //   <option value={21}>21</option>
    //   <option value={22}>22</option>
    //   <option value={23}>23</option>
    //   <option value={24}>24</option>
    //   <option value={25}>25</option>
    // </select>
    // <h1>Welcome {name}</h1>
    // <h2>Your age is: {age}</h2>

    // {
    // age >=20 ? <TwentyAge changeAge={changeAge} username={name} age={age} /> : <EighteenAge changeAge={changeAge} username={name} age={age}  />

    // }

    // </div>
  )
}
export default App;