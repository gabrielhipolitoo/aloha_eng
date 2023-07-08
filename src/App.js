import { Diferencial } from './componentes/Diferencial';
import Inicio from './componentes/Inicio';
import { Nav } from './componentes/Nav';
import Servicos from './componentes/Servicos';
function App() {

   window.addEventListener('scroll',() => {
            const eventScroll = document.querySelectorAll('[data-animation]')
            
            const windotTop = window.scrollY + (window.innerHeight * 3 / 3)

            eventScroll.forEach((element) => {
                if((windotTop) > element.offsetTop){
                    element.classList.add('active-animation')
                }

                else{
                    element.classList.remove('active-animation')

                }
            })

    })


  return (
    <main>
    <Nav/>
    <Inicio/>
    <Diferencial/>
    <Servicos/>
    </main>
    
  );
}

export default App;
