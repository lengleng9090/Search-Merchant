import './App.css';
import Filter from './component/Filter';
import Search from './component/Search';
import Tab from './component/Tab';

function App() {
  return (
    <div className="fluid-container">
      <div className="row-1"><Search /></div>
      <div className="row-2"><Tab /></div>
      
      <div className="col-6 row-4"><Filter /></div>
    </div>
  );
}

export default App;
