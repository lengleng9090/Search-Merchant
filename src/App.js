import './App.css';
import Filter from './component/Filter';
import Search from './component/Search';
import Tab from './component/Tab';

function App() {
  return (
    <div className="fulid-container">
      <Search />
      <Tab />
      <div className="offset-1 col-11" style={{fontSize:20,padding:20}}><b>ผลการค้นหา</b></div>
      <Filter />
    </div>
  );
}

export default App;
