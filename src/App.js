import React, {  } from 'react';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/GreetingF';
import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {/*<Greeting name={'Jose'}></Greeting>*/}
          {/*<GreetingF name={'Jose'}></GreetingF>*/}
          {/* Componente de listado de tareas */}
          <ContactList></ContactList>
        </p>
      </header>
    </div>
  );
}

export default App;
