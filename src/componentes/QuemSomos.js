import React from "react";

import "../assets/css/quemSomos.css";

export const QuemSomos = () => {
  const sobre = (document.title = "Quem Somos");
  const meta = document.querySelector("meta");
  console.log(meta);

  return (
    <section className="quemSomos container-md-fluid">
        <bg className="bgBlue">
            <div className="empresa">
              <h3>Sobre a Aloha Engenharia e Arquitetura</h3>
              <p>
                A Aloha Engenharia e Arquitetura é uma empresa que oferece soluções
                em reformas, elaboração de laudos e projetos arquitetônicos,
                elétricos, hidráulicos, SPDA, consultoria técnica, avaliação de
                imóveis, dentros outros serviços. Com foco na qualidade, nossa
                equipe presta serviços de excelência e cumpre rigorosamente os
                prazos estabelecidos. 
                <br/> 
                A Aloha acredita que cada projeto é único e
                por isso, busca entender as necessidades de nossos clientes para
                oferecer soluções personalizadas e eficientes. Nossos profissionais
                são altamente capacitados e trabalham com dedicação e paixão para
                revolucionar a forma como as pessoas pensam sobre
                reformas e projetos.
              </p>
            </div>
        </bg>

        <div className="valores">
          <h3>Missão, Visão & Valores</h3>
          <div>
            <h4>Missão</h4>
            <p>
              Fornecer soluções inovadoras e sustentáveis em engenharia civil,
              atendendo às necessidades dos clientes com excelência e
              responsabilidade social.
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Ser reconhecida como referência em engenharia civil pela qualidade
              de seus projetos e pela satisfação de seus clientes e
              colaboradores.
            </p>
          </div>
          <div>
            <h4>Valores</h4>
            <p>
              Inovação, Sustentabilidade, Excelência, Responsabilidade social,
              Integridade e Trabalho em equipe.
            </p>
          </div>
        </div>
      <div className="complemento">
        <div className="seguranca">
          <h4>Segurança</h4>
          <ul>
            <li>
              A empresa valoriza a segurança e saúde de seus colaboradores,
              tendo um acompanhamento ativo das normas do SESMT.
            </li>
            <li>
              Reconhece que a implementação de medidas preventivas é fundamental
              para garantir um ambiente de trabalho seguro e saudável.
            </li>
            <li>
              Conta com uma equipe de SESMT que está sempre atenta às normas e
              regulamentações vigentes, demonstrando o comprometimento com a
              saúde, segurança e bem-estar de seus colaboradores e comunidade
              envolvida.
            </li>
          </ul>
        </div>
        <div className="sustetabilidade">
          <h4>Sustentabilidade</h4>
          <ul>
            <li>Crença na importância da sustentabilidade ambiental.</li>
            <li>
              Investimento em práticas sustentáveis para minimizar o impacto
              ambiental.
            </li>
            <li>
              Uso de materiais sustentáveis e gestão eficiente de resíduos.
            </li>
            <li>
              Promoção de campanhas para conscientizar colaboradores, clientes e
              parceiros sobre a importância da sustentabilidade ambiental.
            </li>
            <li>
              Convicção de que é possível ter um negócio de sucesso sem
              prejudicar o planeta.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
