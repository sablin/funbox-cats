import './App.css';
import CatCardList from './components/CatCardList/CatCardList';

function App() {

  const data = [{
    id: 1,
    descr: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с фуа-гра',
    info: ['10 порций'],
    mass: 0.5,
    selectedText:'Печень утки разварная с артишоками.', 
    disabled: false
  },
  {
    id: 2,
    descr: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с рыбой',
    info: ['40 порций', '2 мыши в подарок'],
    mass: 2,
    selectedText:'Головы щучьи с чесноком да свежайшая сёмгушка.', 
    disabled: false
  },
  {
    id: 3,
    descr: 'Сказочное заморское явство',
    title: 'Нямушка',
    subTitle: 'с курой',
    info: ['100 порций', '5 мышей в подарок', 'заказик доволен'],
    mass: 5,
    selectedText:'Филе из цыплят с трюфелями в бульоне.', 
    disabled: true
  }];


  return (
    <div className="App">
      <h1>Ты сегодня покормил кота?</h1>
      <CatCardList cards={data}/>
    </div>
  );
}

export default App;
