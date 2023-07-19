import React from 'react'
import '../assets/css/servicos.css'

// svg
import logo_projetos from '../assets/img/icones/project.svg'
import logo_eletric from '../assets/img/icones/eletric.svg'
import constr_civil from '../assets/img/icones/construcao_civil.svg'
import infra_eletrica from '../assets/img/icones/infra_eletrica.svg'
import metal from '../assets/img/icones/metalica.svg'
import energy from '../assets/img/icones/Energy.svg'


const Servicos = () => {
  return (
    <section className='servicos container-fluid  ' id="servicos">
      <h1>Áreas de Atuação</h1>
      <div className="container_servicos">
        <div data-animation>
          <img src={logo_projetos} alt="Logo elaboração de projetos" />
          <h4>Elaboração de Projetos</h4>
          <p>Civil, Elétrico, Arquitetônico e Complementares</p>
        </div>
        <div data-animation>
          <img src={logo_eletric} alt="Logo elaboração de projetos" />
          <h4>Instalações Elétricas</h4>
          <p>Comercial e Indústrial</p>
        </div>
        <div data-animation>
          <img src={energy} alt="" />
          <h4>Subestação de Energia</h4>
          <p>Execução de subestação de até 750 kVA
          </p>
        </div>
        <div data-animation>
          <img src={infra_eletrica} alt="Infraestrutura eletrica" />
          <h4>Obras de Infraestrutura Elétrica</h4>
          <p>Execução de rede de distribuição
          até 34,5 KV</p>
        </div>
        <div data-animation>
          <img src={constr_civil} alt="logo construção civil" />
          <h4>
            Obras de Infraestrutura Civil
          </h4>
          <p>
            Construção de edifícios, drenagens, pavimentação, terraplanagem
          </p>
        </div>
        <div data-animation>
          <img src={metal} alt="" />
          <h4>Obras em Estruturas Metálicas</h4>
          <p>Comercio e Industria</p>
        </div>
      </div>
    </section>
  )
}

export default Servicos