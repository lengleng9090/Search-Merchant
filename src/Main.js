import React from 'react';
import Filter from './component/Filter';
import Search from './component/Search';
import Tab from './component/Tab';
import ShopCard from './component/ShopCard';
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: null,
            subValue:null,
            searchValue:"default",
            data:null,
            loading:true
        };
        this.onValueConfirm = this.onValueConfirm.bind(this);
        this.onSubValueConfirm = this.onSubValueConfirm.bind(this);
        this.onSearchValue = this.onSearchValue.bind(this);
    }
    async componentDidMount(){
        const url = "https://panjs.com/ywc18.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ data:data, loading:false});
    }
    
    onSubValueConfirm(order){
        console.log("กรอง : "+ order);
        this.setState({subValue: order});
    }
    onValueConfirm(order) {
        console.log("ประเภทร้านค้า : "+ order);
        this.setState({value: order});
    }
    onSearchValue(value){
        console.log("ค้นหา :"+value);
        this.setState({searchValue: value});
    }

    render(){
        return(
    <div className="fluid-container">
      <div className="row-1" ><Search onSearchValue={this.onSearchValue} /></div>
      <div className="row-2"><Tab /></div>
      {this.state.value == null ? 
      (<div className="row offset-1" style={{padding:20}}><strong>ผลการค้นหา ทั้งหมด</strong></div>)
      :
      (<div className="row offset-1" style={{padding:20}}><strong>ผลการค้นหา {this.state.value}</strong></div>)
    }
      <div className="row">
          <div className="col-4"><Filter onValueConfirm={this.onValueConfirm} onSubValueConfirm={this.onSubValueConfirm} /></div>
          <div className="col">
                <div className="row">
                {!this.state.data ||this.state.loading ?(null) 
                :(this.state.data.merchants.map((merchant)=>
                this.state.searchValue === "default" || merchant.shopNameTH.toLowerCase().includes(this.state.searchValue.toLowerCase()) ?
                (<ShopCard merchant={merchant} key={merchant.shopNameTH} />):(null)
                
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