import React from 'react'
import '../assets/css/footer.css'

// imgs
import whatssap  from '../assets/img/icones/whatssap.svg'
import insta from '../assets/img/icones/insta.svg'
import linkedin from '../assets/img/icones/linkedin.svg'

export const Footer = () => {
  return (
    <footer className='page_end'>
        <div className='legal'>
            <h4>Legal</h4>
            <a href="">Política de Privacidade</a>
            <a href="">Termos de Uso</a>
        </div>
        <div className='contato'>
            <h4>Contato</h4>
            <p>rafael.hipolito@alohaengenharia.com.br</p>
            <p>+55 71 9 9213-5500</p>
        </div>
        <div className='redes_sociais'>
            <h4>Redes Sociais</h4>
            <ul>

             <li>
              <a href="">
                <img src={whatssap} alt="" />
              </a>
             </li>
             <li>
              <a href="">
                <img src={insta} alt="" />
              </a>
             </li>
             <li> 
                <a href="">
                  <img src={linkedin} alt="" />
                </a>
             </li>

            </ul>

        </div>
    </footer>
  )
}
