import React from 'react';
class Filter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
      loading : true,
      fitler : null};
    
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeSubValue = this.onChangeSubValue.bind(this);
        this.onChangePriceValue = this.onChangePriceValue(this);
        this.onChangeProvinceValue = this.onChangeProvinceValue(this);
      }

      async componentDidMount(){
          const url = "https://panjs.com/ywc18.json";
          const response = await fetch(url);
          const data = await response.json();
          this.setState({ fitler:data, loading:false});
      }

      onChangeValue(event) {
        this.setState({value: event.target.value});
        this.props.onValueConfirm(event.target.value === "default"? ("ทั้งหมด"):(event.target.value));
        };

      onChangeSubValue(event){
        this.props.onSubValueConfirm(event.target.value === "default"? ("ทั้งหมด"):(event.target.value));
      };
      onChangePriceValue(event){

      }
      
      onChangeProvinceValue(event){

      }
    
      render() {
        return (
          <div className= "offset-2" style={{backgroundColor : "white",
          width: 350,
          padding:10,
          borderRadius:5,
          marginTop:20,
          marginBottom:20}}>
              <p><b>ประเภทร้านค้า :</b></p>
              {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div>
              <input type="radio" value="default" name="shopType" onChange={this.onChangeValue} /> ทั้งหมด <br />
              {this.state.fitler.categories.map((result)=>
              <div>
                <input type="radio" value={result.name} name="shopType" onChange={this.onChangeValue} /> {result.name} <br />
              </div>
              )}
              </div>
              )}
            <br />

            <p><b>จังหวัด/ใกล้ฉัน</b></p>
            {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div onChange={this.onChangeProvinceValue}>
                <select name="province" className="browser-default custom-select">
                <option value="nearby">พื้นที่ใกล้ฉัน</option>
                <option value="all">สถานที่ทั้งหมด</option>
                <option disabled>-----------------</option>
                  {this.state.fitler.provinces.map((provice) =>
                  <option value={provice}>{provice}</option>
                  )}
                </select>
            </div>
              )}
            <br />

            <p><b>ราคา</b></p>
            {this.state.loading || !this.state.fitler ? (<div></div>) 
              : (
              <div onChange={this.onChangePriceValue}>
                <select name="priceRange" className="browser-default custom-select">
                <option value="all">ทั้งหมด</option>
                  {this.state.fitler.priceRange.map((price) =>
                  <option value={price}>{price}</option>
                  )}
                </select>
            </div>
              )}
            <br />

            {this.state.value === "ร้านอาหารและเครื่องดื่ม" ?(
              <div>
                <p><b>ประเภทร้านอาหารและเครื่องดื่ม</b></p>
                {this.state.loading || !this.state.fitler ? (null) 
                : (
                  <div onChange={this.onChangeSubValue}>
                  <input type="radio" value="default" name="foodType"/> ทั้งหมด <br />
                  {this.state.fitler.categories[0].subcategories.map((subcategorie) =>
                      <div>
                      <input type="radio" value={subcategorie} name="foodType" /> {subcategorie}
                      </div>
                    )}
                  </div>
              )}
              </div>
              
            ):(null)}

            {this.state.value ==="ร้านค้า OTOP" ? (
              <div>
              <p><b>ประเภทร้านค้า OTOP</b></p>
              {this.state.loading || !this.state.fitler ? (null) 
              : (
                <div onChange={this.onChangeSubValue}>
                <input type="radio" value="default" name="shopType"/> ทั้งหมด <br />
                {this.state.fitler.categories[1].subcategories.map((subcategorie) =>
                    <div>
                    <input type="radio" value={subcategorie} name="shopType" /> {subcategorie}
                    </div>
                  )}
                </div>
            )}
            </div>
            ):
            (null)}

            {this.state.value ==="สินค้าทั่วไป" ? (
              <div>
              <p><b>ประเภทร้านค้าสินค้าทั่วไป</b></p>
              {this.state.loading || !this.state.fitler ? (null) 
              : (
                <div onChange={this.onChangeSubValue}>
                <input type="radio" value="default" name="shopType"/> ทั้งหมด <br />
                {this.state.fitler.categories[3].subcategories.map((subcategorie) =>
                    <div>
                    <input type="radio" value={subcategorie} name="shopType" /> {subcategorie}
                    </div>
                  )}
                </div>
            )}
            </div>
            ):
            (null)}



    </div>
        );
      }
}
export default Filter;