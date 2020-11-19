import React from 'react';
import Filter from './component/Filter';
import Search from './component/Search';
import Tab from './component/Tab';
import ShopCard from './component/ShopCard';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cat: null,
            data:null,
            loading:true
        };
        this.onConfirm = this.onConfirm.bind(this);
    }
    async componentDidMount(){
        const url = "https://panjs.com/ywc18.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data:data, loading:false});
    }
    onConfirm(order) {
        console.log(order);
        this.setState({cat: order});
    }
    render(){
        return(
    <div className="fluid-container">
      <div className="row-1"><Search /></div>
      <div className="row-2"><Tab /></div>
      {this.state.cat == null ? 
      (<div className="row offset-1" style={{padding:20}}>ผลการค้นหา </div>)
      :
      (<div className="row offset-1" style={{padding:20}}>ผลการค้นหา {this.state.cat}</div>)
    }
      <div className="row">
          <div className="col-4"><Filter confirm={this.onConfirm}/></div>
          <div className="col">
                <div className="row">
                {!this.state.data ||this.state.loading ?(null) 
                :(this.state.data.merchants.map((merchant)=>
                <ShopCard merchant={merchant}/>
                )
                )}
                </div>
          </div>
      </div>
    </div>
        );
    }
}
export default Main;