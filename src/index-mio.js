//import { Welcome } from './components/Welcome.js';

//ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));
/* <div class="tarjeta">
   <img
    src="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
    alt="Foto de perfil"
    class="tarjeta-img"
    />
   <div class="tarjeta-data">
    <header class="tarjeta-data-header">Julián Absatz</header>
    <span>Programador Front End</span>
   </div>
  </div>
 */
import { Perfil } from "./tarea/Tarea1"
const app = document.getElementById("react-app")
ReactDOM.render(Perfil, app)


// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );

// import { LikeButton } from './components/LikeButton.js';

// ReactDOM.render(<LikeButton />, document.getElementById('react-app'));

// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));
