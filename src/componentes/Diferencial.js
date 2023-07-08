import React from 'react'

// styles
import '../assets/css/diferencial.css'
export const Diferencial = () => {

  

  return (
    <article className='diferencial flex-column align-items-center  flex-lg-row fex-nowrap justify-content-evenly row gx-0 container-fluid' >
        <h4 className='col-11 p-2 '><span>Nossos</span> Diferenciais</h4>
        <div className='textDiferencial ' data-animation>
            <h3>
                Atendimento
            </h3>
            <p>
                No grupo Aloha Engenharia, oferecemos um atendimento excepcional, personalizado e proativo, superando as expectativas dos nossos clientes. Nossa prioridade é proporcionar uma experiência positiva e memorável, solucionando problemas de forma ágil e antecipando suas necessidades. No Aloha Engenharia, o atendimento é o nosso diferencial.
            </p>
        </div>
        <div className='textDiferencial' data-animation>
            <h3>
                Qualificação Técnica
            </h3>
            <p>
                Nossa equipe de profissionais é altamente qualificada e composta por especialistas em diferentes áreas, garantindo um atendimento completo e integrado aos nossos clientes. Temos engenheiros civis, arquitetos e eletricistas trabalhando juntos, oferecendo soluções técnicas e inovadoras para todas as necessidades de nossos clientes
            </p>
        </div>
        <div className='textDiferencial' data-animation>
             <h3>
                Responsabilidade Social
            </h3>
            <p>
                A empresa acredita na união entre sucesso econômico e responsabilidade social e ambiental. A equipe trabalha para minimizar o impacto ambiental com ações ecoeficientes e práticas sustentáveis. Além disso, apoiam projetos locais e buscam garantir condições justas e equitativas para funcionários e contribuir para o desenvolvimento comunitário
            </p>
        </div>
    </article>
  )
}
