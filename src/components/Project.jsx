import githubIcon from '../assets/img/presentation/github.png'

export default function Project({image,title,description,githubLink}){
  return <article className='Project'>
    <div className='Project__img-container'>
      <img src={image} alt='login-hdp2' />
    </div>
    <div className='Project__description'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className='Project__links'>
      <a href={githubLink} target='_blank' rel='noreferrer'><img src={githubIcon} alt='github' /></a>
    </div>
  </article>
}