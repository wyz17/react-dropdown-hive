import './App.css';
import Dropdown from './components/Dropdown';

const items = [
  {
    id: 1,
    value: 'Olive Hansory',
  },
  {
    id: 2,
    value: 'Van Henry',
  },
  {
    id: 3,
    value: 'April Turker',
  },
  {
    id: 4,
    value: 'Palph Kim',
  },
  {
    id: 5,
    value: 'Jennie Lopez',
  },
  {
    id: 6,
    value: 'Ashley Hiddson',
  },
  {
    id: 7,
    value: 'Tim Cooker',
  },
];

function App() {
  return (
    <div>
      <header className='App-header'>
        <Dropdown title='Single' items={items} />
        <Dropdown title='Multi' items={items} multiSelect />
      </header>
    </div>
  );
}

export default App;
