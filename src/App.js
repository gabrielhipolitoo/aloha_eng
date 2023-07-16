import react from 'react'

import { BrowserRouter,Routes,Route,Navigate,HashRouter } from 'react-router-dom';

//componentes
import { Diferencial } from './componentes/Diferencial';
import { Footer } from './componentes/Footer';
import Inicio from './componentes/Inicio';
import { Nav } from './componentes/Nav';
import Servicos from './componentes/Servicos';
import { Componentes } from './Componentes';
import { QuemSomos } from './componentes/QuemSomos';
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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/aloha_engenharia"/>}/>
        <Route path="/aloha_engenharia" element={<Componentes/>}/>
        <Route path="/quemsomos" element={<QuemSomos/>}/>
      </Routes>
      
    </HashRouter>
      <Footer/>
    </main>
    
  );
}

export default App;
