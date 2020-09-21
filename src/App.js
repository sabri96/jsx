import React from 'react';
import './App.css';
import profil from './ipad.jpg';
function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1px black', maxWwidth:'100vw'}}>  
 
 <h1 className='title red'>Your name here</h1>  

     <br/>  

       <img src="/img.jpg" alt="moi"/>
       <img src={profil} alt="hi"/>

</div>  

<video width={320} height={240} controls>  

   <source src="https://www.youtube.com/embed/1tpU8cpgY1I" type="video/mp4"/> 

</video>
    </div>
  );
}

export default App;
