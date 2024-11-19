import santiagoPhoto from '../assets/img/presentation/santiago.jpeg'
import githubIcon from '../assets/img/presentation/github.png'
import './Presentation.css'

 export default function Presentation(){
  return <section className='Presentation'>
    <div className='Presentation__photo-container'>
      <img src={santiagoPhoto} alt='sebas-photo' />
    </div>
    <h2 className='Presentation__name'>Santiago</h2>
    <Platforms/>
    <div className='Presentation__description-container'>
      <p>¡Hola! Soy Santiago Arango, un desarrollador web frontend. Me apasiona crear interfaces gráficas funcionales para sitios web y estoy comprometido en dominar las prácticas más importantes del desarrollo frontend. Actualmente, estoy en el 3er semestre de Tecnología en Desarrollo de Software en la Institución Universitaria Pascual Bravo de Medellín.</p>
    </div>
  </section>
}

function Platforms(){
  return <div className='Platforms'>
    <div className='Platform'>
      <a href='https://github.com/santyy09' target='_blank' rel='noreferrer'><img src={githubIcon} alt='github' /></a>
    </div>
  </div>
}