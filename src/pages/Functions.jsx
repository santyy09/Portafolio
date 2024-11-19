import { useState } from "react";
import './Functions.css'

export default function Functions(){
  return <>
    <h1>Funciones</h1>
    <Calculator/>
  </>
}

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!weight || !height || !age || !activity) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Fórmula simplificada para TDEE (Total Daily Energy Expenditure)
    // BMR (Tasa Metabólica Basal) aproximada para hombres y mujeres
    let bmr;
    if (activity === 'sedentario') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Hombre
      bmr = bmr * 1.2; // Sedentario
    } else if (activity === 'activo') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Hombre
      bmr = bmr * 1.55; // Actividad moderada
    } else if (activity === 'muyActivo') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Hombre
      bmr = bmr * 1.9; // Alta actividad
    }

    setCalories(bmr);
  };

  return (
    <div className='Calculator'>
      <h2>Calculadora de Calorías</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Peso (kg):</label>
          <input 
            type='number'
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          />
        </div>
        <div>
          <label>Altura (cm):</label>
          <input 
            type='number'
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          />
        </div>
        <div>
          <label>Edad:</label>
          <input 
            type='number' 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <div>
          <label>Actividad:</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value=''>Selecciona tu nivel de actividad</option>
            <option value='sedentario'>Sedentario</option>
            <option value='activo'>Activo</option>
            <option value='muyActivo'>Muy activo</option>
          </select>
        </div>
        <button type='submit'>Calcular</button>
      </form>

      {calories && (
        <div>
          <h3>Calorías estimadas diarias: {Math.round(calories)} kcal</h3>
        </div>
      )}
    </div>
  );
};