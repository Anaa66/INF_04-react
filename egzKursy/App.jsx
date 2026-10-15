import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [courses, setCourses] = React.useState(['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django']);
  const [courseNumb, setCourseNumb] = React.useState("");
  const [usName, setUsName] = React.useState("");

  function BtnClicked(){
    console.log(usName);
    console.log(courseNumb);
  }

  function changeCourseNumber(e){
    setCourseNumb(e.target.value);
  }

  function changeUserName(e){
    setUsName(e.target.value);
  }

  return(
    <div className='p-4'>
      <h2>Liczba kursów {courses.length}</h2>
      <div>
        <ol className='list-group-numbered'>
          {courses.map((item, indexItem) => (
            <li key={indexItem} className='list-group-item'>{item}</li>
          ))}
        </ol>
      </div>
      
      <div className="form-group">
        <div>
          <label htmlFor="userName" className='form-label'>Imie i nazwisko:</label>
          <input type="text" className="form-control" id='userName' onChange={changeUserName}/>
        </div>
        <div className='mt-3'>
          <label htmlFor="courseNumb" className='form-label'>Numer kursu:</label>
          <input type="number" className="form-control" id='courseNumb' min={1} max={3} onChange={changeCourseNumber}/>
        </div>
        <button className="btn btn-primary mt-3" onClick={BtnClicked}>Zapisz do kursu</button>
      </div>
    </div>
  );
}

export default App
