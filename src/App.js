import './App.css';
import Separator from './components/Separator/Separator';
import Hex2Rgb from './components/Hex2Rgb/Hex2Rgb';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App">
      <h1>Курс React. Домашнее задание по&nbsp;теме "Формы"</h1>
      <div className='task-1' id='task-1'>
        <h2>Задание 1. "Конвертер цветов (hex2rgb)"</h2>
        <Hex2Rgb/>
      </div>
      <Separator/>
      <div className='task-2' id='task-2'>
        <h2>Задание 2. "Учёт тренировок (steps)"</h2>
        <Steps/>
      </div>
      <Separator/>
      {/* <div className='task-3' id='task-3'>
        <h2>Задание 3. "Менеджер фото (photo)"</h2>
      </div> */}
    </div>
  );
}

export default App;
