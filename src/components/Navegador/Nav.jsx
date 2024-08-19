import foto from '../../icons/foto.png'
import Contact from '../Contact/Contact'
import './Nav.css'
import { LogosFacebook, DeviconGithub, SkillIconsInstagram, SkillIconsLinkedin } from '../../icons/Icons';

const lista = ["Home", "Skills", "Portfolio", "Contact"]

function Navegador(props) {
    return (

        <div className='navigation'>
            <div className='circle'></div>
            <div className='navigation-img'>
                <img src={foto} alt='foto' />
            </div>
            <div className='navigation-list'>
                <ul className='list-home-1'>
                    {lista.map((item) => <li>{item}</li>)}
                </ul>
            </div>
            <div className='navigation-contact'>
                <ul className='img-contact'>
                    <li>
                        <a target='blank' href='https://www.linkedin.com/in/carlos-hernandez-llaocua-08993a237/'>
                            <SkillIconsLinkedin width="50px" height="50px" />
                        </a>
                    </li>
                    <li>
                        <a target='blank' href='https://www.facebook.com/profile.php?id=100071137513942'>
                            <LogosFacebook width="50px" height="50px" />
                        </a>
                    </li>
                    <li>
                        <a target='blank' href='https://github.com/CarlosHernandezLl'>
                            <DeviconGithub width="50px" height="50px" />
                        </a>
                    </li>
                    <li>
                        <a target='blank' href='https://www.instagram.com'>
                            <SkillIconsInstagram width="50px" height="50px" />
                        </a>
                    </li>
                </ul>
            </div>
        </div >

    )
}

export default Navegador

