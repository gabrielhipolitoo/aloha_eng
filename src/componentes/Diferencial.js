import React from 'react'

// styles
import '../assets/css/diferencial.css'
export const Diferencial = () => {

  
    window.addEventListener('scroll',() => {
            const eventScroll = document.querySelectorAll('[data-animation]')
            
            const windotTop = window.scrollY + (window.innerHeight * 3 / 4)

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
    <article className='diferencial flex-column align-items-center  flex-lg-row fex-nowrap justify-content-evenly row gx-0 container-fluid' data-animation>
        <h3 className='col-11 p-2 mb-5'><span>Nossos</span> diferenciais</h3>
        <div className='textDiferencial  ' data-animation>
            <h4>
                Atendimento
            </h4>
            <p>
                No grupo Aloha Engenharia, oferecemos um atendimento excepcional, personalizado e proativo, superando as expectativas dos nossos clientes. Nossa prioridade é proporcionar uma experiência positiva e memorável, solucionando problemas de forma ágil e antecipando suas necessidades. No Aloha Engenharia, o atendimento é o nosso diferencial.
            </p>
        </div>
        <div className='textDiferencial' data-animation>
            <h4>
                Qualificação técnica
            </h4>
            <p>
                Nossa equipe de profissionais é altamente qualificada e composta por especialistas em diferentes áreas, garantindo um atendimento completo e integrado aos nossos clientes. Temos engenheiros civis, arquitetos e eletricistas trabalhando juntos, oferecendo soluções técnicas e inovadoras para todas as necessidades de nossos clientes
            </p>
        </div>
        <div className='textDiferencial' data-animation>
             <h4>
                Responsabilidade social
            </h4>
            <p>
                A empresa acredita na união entre sucesso econômico e responsabilidade social e ambiental. A equipe trabalha para minimizar o impacto ambiental com ações ecoeficientes e práticas sustentáveis. Além disso, apoiam projetos locais e buscam garantir condições justas e equitativas para funcionários e contribuir para o desenvolvimento comunitário
            </p>
        </div>
    </article>
  )
}
