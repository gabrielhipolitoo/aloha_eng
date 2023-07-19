 import React from 'react'
import '../assets/css/inicio.css'
const Inicio = () => {
  return (
    <section className="inicial container-md-fluid" id="inicio">
        <div className="sombra   ">
           <div className="slogan ">
            <h1>
                Construindo sonhos, entregando resultados. 
            </h1>
            <p>Somos mais que construção, a gente é a sua realização.</p>
           </div> {/*Slogan*/}

           {/*<div className="formOrcamento mt-md-auto m-auto col-md-4 col-8">
              <form action="">
                  <h2 className=''>Faça seu orcamento agora</h2>
                  <label htmlFor="nome">
                    <input id="nome" type="text" placeholder='Nome completo'/>
                  </label>

                  <label htmlFor="email">
                    <input id="email" type="email" placeholder='Seu email'/>
                  </label>

                  <label htmlFor="telefone">
                    <input id="telfone" type="text" placeholder='Seu telefone'/>
                  </label>

                  <label htmlFor="empresa">
                    <input id="empresa" type="text" placeholder='Nome da empresa'/>
                  </label>

                   <label htmlFor="texto">
                    <input id="texto" type="text" placeholder='Sua mensagem'/>
                  </label>

                  <input type="submit" value="enviar"/>
              </form>
           </div> form*/}
        </div> {/*Sombra */}
    </section>
  )
}

export default Inicio