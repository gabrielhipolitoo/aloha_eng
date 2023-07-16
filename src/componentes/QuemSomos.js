import React from 'react'

import '../assets/css/quemSomos.css'

export const QuemSomos = () => {
  return (
    <section className='quemSomos'>
        <div className='bgQuemSomos'>
            <h1>Quem somos</h1>
        </div>
        <div className="bgBlue">
            <div className="empresa">
                <h3>Empresa</h3>
                <p>
                    Quem somos A Aloha Engenharia e Arquitetura é uma empresa que oferece soluções em reformas, elaboração de laudos e projetos arquitetônicos, elétricos, hidráulicos, SPDA e consultoria técnica. Com foco na qualidade, a equipe presta serviços de excelência e cumpre rigorosamente os prazos estabelecidos. A Aloha acredita que cada projeto é único e por isso, busca entender as necessidades de seus clientes para oferecer soluções personalizadas e eficientes. Seus profissionais altamente capacitados trabalham com dedicação e paixão para revolucionar a forma como as pessoas pensam sobre reformas e projetos. Com um espírito empreendedor e visão inovadora, a Aloha Engenharia e Arquitetura está sempre em busca de novos desafios e oportunidades de crescimento.
                </p>
            </div>
            <div className="valores">
                <h3>Missão, visão & Valores</h3>
                <div>
                    <h4>Missão</h4>
                    <p>
                        Fornecer soluções inovadoras e sustentáveis em engenharia civil, atendendo às necessidades dos clientes com excelência e responsabilidade social.
                    </p>
        
                </div>
                <div>
                    <h4>Visão</h4>
                    <p>
                        Ser reconhecida como referência em engenharia civil pela qualidade de seus projetos e pela satisfação de seus clientes e colaboradores.
                    </p>
                </div>
                <div>
                    <h4>Valores</h4>
                    <p>
                        Inovação, Sustentabilidade, Excelência, Responsabilidade social, Integridade e Trabalho em equipe.
                    </p>
                </div>
            </div>
        </div>
        <div className="complemento">
            <div className="seguranca">
                <h4>
                    Segurança
                </h4>
                <ul>
                    <li>
                        A empresa valoriza a segurança e saúde de seus colaboradores.
                    </li>
                    <li>
                        A empresa tem um acompanhamento ativo das normas do SESMT.
                    </li>
                    <li>
                        A empresa sabe que a implementação de medidas preventivas é fundamental para garantir um ambiente de trabalho seguro e saudável.
                    </li>
                    <li>
                        A empresa tem uma equipe de SESMT que está sempre atenta às normas e regulamentações vigentes.
                    </li>
                    <li>
                        A empresa está comprometida com a saúde e segurança de seus colaboradores e com o bem-estar de toda a comunidade envolvida na sua empresa.
                    </li>
                  
                </ul>
            </div>
            <div className="sustetabilidade">
                <h4>Sustentabilidade</h4>
                <ul>
                    <li>
                        A empresa acredita na importância da sustentabilidade ambiental.
                    </li>
                    <li>A empresa investe em práticas sustentáveis e procura minimizar o impacto ambiental de suas atividades.
                    </li>
                    <li>A empresa escolhe materiais sustentáveis em seus produtos e implementa processos eficientes de gestão de resíduos.
                    </li>
                    <li>
                        A empresa promove campanhas internas e externas para conscientizar seus colaboradores, clientes e parceiros sobre a importância da sustentabilidade ambiental.
                    </li>
                    <li>
                        A empresa acredita que é possível ter um negócio de sucesso sem prejudicar o planeta.
                    </li>
                </ul>

            </div>
        </div>
        
    </section>
  )
}
