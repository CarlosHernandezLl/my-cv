import logo from './logo.svg';
import './App.css';
import Nav from './components/Navegador/Nav';
import './icons/foto.png';
import { MdiAngular } from './icons/Icons';
import {
  DeviconAngular, DeviconCplusplus, DeviconCss3, DeviconFigma, DeviconGit, DeviconHtml5, DeviconJava, DeviconPostgresql,
  DeviconPython, DeviconReact
} from './icons/Icons';

import Hora from './components/Contador/Contador';
//import Hora from './components/Contador/Hora';

const listaSkills = [
  <DeviconHtml5 />,
  <DeviconCss3 />,
  <DeviconReact />,
  <DeviconAngular />,
  <DeviconCplusplus />,
  <DeviconFigma />,
  <DeviconPython />,
  <DeviconJava />,
  <DeviconPostgresql />,
  <DeviconGit />,
]



function App() {
  return (
    <>
      <Nav />
      <div className='presentation'>
        <p>HELLO MY NAME IS</p>
        <p>CARLOS HERNANDEZ</p>
        <p>Front Developer & Data analytics</p>
      </div>

      <div className='skills'>
        <h2>Skills</h2>
        <ul>
          {listaSkills.map((skill) => <li>{skill}</li>)}
        </ul>
      </div>

      <Hora />

    </>




  );
}

export default App;
