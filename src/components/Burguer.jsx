import './Burguer.css'

export default function Burguer({isOpen,isOpenUpdate}){
  const classburguerButton = isOpen ?'burguer__button open' : 'burguer__button'

  const updateburguer = () => {
    isOpenUpdate(!isOpen)
  }

  return <div className='Burguer'>
    <button className={classburguerButton} onClick={updateburguer}>
      <span className='line top-line'></span>
      <span className='line middle-line'></span>
      <span className='line bottom-line'></span>
    </button>
  </div>
}