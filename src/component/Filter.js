import React from 'react';
class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''
      ,loading : true,
      fitler : null};
    
        this.onChangeValue = this.onChangeValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      async componentDidMount(){
          const url = "https://panjs.com/ywc18.json";
          const response = await fetch(url);
          const data = await response.json();
          this.setState({ fitler:data, loading:false});
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      onChangeValue(event) {
        this.setState({type : event.target.value});
      }
    
      render() {
        return (
          <div className= "offset-2" style={{backgroundColor : "white",
          width: 350,
          padding:10,
          borderRadius:5,
          marginTop:20}}>
              <p><b>ประเภทร้านค้า :</b></p>
              {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div onChange={this.onChangeValue} >
              <input type="radio" value="default" name="shopType"/> ทั้งหมด <br />
              {this.state.fitler.categories.map((result)=>
              <div>
                <input type="radio" value={result.name} name="shopType" /> {result.name} <br />
              </div>
              )}
              </div>
              )}
            <br />
            <p><b>จังหวัด/ใกล้ฉัน</b></p>
            {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div onChange={this.onChangeValue}>
                <select name="province">
                <option value="nearby">พื้นที่ใกล้ฉัน</option>
                <option value="all">สถานที่ทั้งหมด</option>
                  {this.state.fitler.provinces.map((provice) =>
                  <option value={provice}>{provice}</option>
                  )}
                </select>
            </div>
              )}
            <p><b>ราคา</b></p>
            {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div onChange={this.onChangeValue}>
                <select name="priceRange">
                <option value="all">ทั้งหมด</option>
                  {this.state.fitler.priceRange.map((price) =>
                  <option value={price}>{price}</option>
                  )}
                </select>
            </div>
              )}
            <p><b>ประเภทร้านอาหารและเครื่องดื่ม</b></p>
            {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <label>
              <div onChange={this.onChangeValue}>
                  <input type="radio" value="all" name="foodType"/> ทั้งหมด <br />
                  {this.state.fitler.categories[0].subcategories.map((subcategorie) =>
                  <div>
                  <input type="radio" value={subcategorie} name="foodType" /> {subcategorie}
                  </div>
                  )}
            </div>
            </label>
              )}



    </div>
        );
      }
}
export default Filter;