import React from 'react';
const Logo = '/Images/halfhalf-logo.png';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            query: '',
            result: {},
            loading: false,
            message:''
        }
    }
    render(){
        return(
            <div  className="d-flex justify-content-center" style={{backgroundColor:"white",padding:10}}>
                <img src={Logo}  width="150" height="40" alt="This is Logo" className="Logo" />
                <label className="search-label" htmlFor="search-input" style={{marginLeft:20}}>
                <input 
                    className="form-control"
                    type="text"
                    value=""
                    id="search-input"
                    size="120"
                    onChange={(e) => this.setState({ textValue: e.target.value })}
                    placeholder="ค้นหาชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
                </label>
            </div>
        );
    }
}
export default Search;