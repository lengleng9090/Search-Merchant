import React from 'react';
import Logo from './asset/halfhalf-logo.png';
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
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.onSearchValue(e.target.value === "" ? ("default"):(e.target.value))
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
                    id="search-input"
                    size="120"
                    onKeyDown={this._handleKeyDown}
                    placeholder="ค้นหาชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
                </label>
            </div>
        );
    }
}
export default Search;