import './Home.css'
import Presentation from '../components/Presentation'
import Projects from '../components/Projects'
import emailjs from '@emailjs/browser'

export default function Home(){
  return <div className='Home'>
    <Presentation/>
    <Projects/>
    <Contact/>
  </div>
}

function Contact(){

  const handleSubmit = (e)=>{
    e.preventDefault()
    const serviceID = 'service_tmm12a5'
    const templateID = 'template_c75bmbj'
    const apikey = 'BGHMNw9gT9q-dM0EP'
    // const formData = new FormData(e.target);
    // const values = Object.fromEntries(formData);
    emailjs.sendForm(serviceID,templateID,e.target,apikey)
      .then(res=>console.log(res.text))
  }

  return <section className='Contact'>
    <h2>Contact</h2>
    <form className='ContactForm' action='' onSubmit={handleSubmit}>
      <fieldset className='ContactForm__field'>
        <label htmlFor='username'>Nombre</label>
        <input name='username' id='username' placeholder='name' required/>
      </fieldset>
      <fieldset className='ContactForm__field'>
        <label htmlFor='email'>Email</label>
        <input name='email' id='email' type='email' placeholder='name@email.com' required/>
      </fieldset>
      <fieldset className='ContactForm__field'>
        <label htmlFor='message'>Mensaje</label>
        <textarea name='message' id='message' placeholder='message' required></textarea>
      </fieldset>
      <button className='ContactForm__send-button'>Enviar</button>
    </form>
  </section>
}