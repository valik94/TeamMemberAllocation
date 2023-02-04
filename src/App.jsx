import * as React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';

function App() {
  return (
    <main>
      <Header/>
      <Content/>
      <Footer/>
      <Employees/>
    </main>
  );
}

export default App;