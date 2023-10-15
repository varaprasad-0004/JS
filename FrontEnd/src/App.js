import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Arrow from './Components/Arrow Function';
import Compo3 from './Components/Clazz';
import Compo from './Components/Components';
import Compo2 from './Components/Componentz';
import Person from './Components/person';
import Modal from './Components/Alert';
import Slistz from './Components/SlistZ';
import Netflix from './Netfilx';
import ActorMovieChart from './Components/Shortcutz';
import Parent from './Components/Parent';
import Click from './Components/Eventz';
import Imagehover from './Components/Imagehover';
import Hookz from './Components/Hookz';
import Lyt from './Components/Lyt';
import Lytof from './Components/Bef_Aft';
import BackgroundColorChanger from './Components/Bgc';
import Gt from './Components/Bef_Aft _GT';
import Fashion from './Components/Lyt2';
import Calculator from './Components/Calculator';
import Formz from './Components/Formz';
import Navbar from './Components/Navbar';
import StudentList from './Components/studentlist';
import { FormDR } from './Components/FormDR';
import EditFormz from './Components/editform';
import { EditFormDR } from './Components/editformdr';
import CourseList from './Components/courselist';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Compo/>}></Route>
          <Route path='/compo2' element={<Compo2/>}></Route>
          <Route path='/arroe' element={<Arrow/>}></Route>
          <Route path='/compo3' element={<Compo3/>}></Route>
          <Route path='/person' element={<Person name='Hudson ' no='753'/>}></Route>
          <Route path='/modal' element={<Modal/>}></Route>
          <Route path='/movie' element={<Slistz/>}></Route>
          <Route path='/netflix' element={<Netflix/>}></Route>
          <Route path='/spec' element={<ActorMovieChart/>}></Route>
          <Route path='/pare' element={<Parent/>}></Route>
          <Route path='/clk' element={<Click/>}></Route>
          <Route path='/zom' element={<Imagehover/>}></Route>
          <Route path='/hook' element={<Hookz/>}></Route>
          <Route path='/lyt' element={<Lyt/>}></Route>
          <Route path='/lyo' element={<Lytof/>}></Route>
          <Route path='/bgc' element={<BackgroundColorChanger/>}></Route>
          <Route path='/gt' element={<Gt/>}></Route>
          <Route path='/jailer' element={<Fashion/>}></Route>
          <Route path='/cal' element={<Calculator/>}></Route>
          <Route path='/formz' element={<Formz/>}></Route>
          <Route path='/navb' element={<Navbar/>}></Route>
          <Route path='/getdata' element={<StudentList/>}></Route>
          <Route path='/drive' element={<FormDR/>}></Route>
          <Route path='/lstd' element={<CourseList/>}></Route>
          <Route path='/FormDR' element={<FormDR/>}></Route>
          <Route path='/editform/:id' element={<EditFormz/>}></Route>
          <Route path='/editformdr/:id' element={<EditFormDR/>}></Route>
        </Routes>
      </BrowserRouter>
    {/* <h3>Mark Antony</h3>
    <Compo />
    <Compo3 />
    <Compo2 />
    <Arrow />
    <Person name='Hudson' no='753' /> */}
    </div>
  );
}

export default App;
