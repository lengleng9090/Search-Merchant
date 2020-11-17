import './App.css';
import Filter from './component/Filter';
import Search from './component/Search';
import Tab from './component/Tab';
import ShopCard from './component/ShopCard';

function App() {
  return (
    <div className="fluid-container">
      <div className="row-1"><Search /></div>
      <div className="row-2"><Tab /></div>
      <div className="row offset-1" style={{padding:20}}>ผลลลลลล</div>
      <div className="row">
          <div className="col-4"><Filter /></div>
          <div className="col">
            <div className="row"><ShopCard /></div>
          </div>
      </div>
    </div>
  );
}

export default App;
