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
 
const propiedades = {
   titulo:"Ardillas",
   parrafos:["Hoy vi una ardilla.", "La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.",
               "Creo que puede haber sido un perro, dado que en Argentina no hay ardillas."],
   autor:{
      nombre:"Lautaro Pistagnesi", 
      imagen:"https://avatars.githubusercontent.com/u/123837973?s=48&v=4", 
      titulo:"Estudiante de programacion"
}}
import { BlogPost } from "./tarea/Tarea1.js"
const app = document.getElementById("react-app")
ReactDOM.render(BlogPost(propiedades), app)
*/
import { Button } from './components/Button.js';

ReactDOM.render(
<Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
document.getElementById('react-app')
);

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
