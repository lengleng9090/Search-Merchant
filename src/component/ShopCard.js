import React from 'react';
import logoCar from './Images/ที่จอดรถ.png';
import logoPet from './Images/สัตว์เลี้ยง.png';
import booking from './Images/booking.png';

class ShopCard extends React.Component{
 constructor(props){
    super(props);
    this.state ={
    };
    this.calCost = this.calCost.bind(this);
 }
 calCost(level){
   const cost = ['฿','฿','฿','฿'];
   const items =[];
   for (let i=0;i<cost.length;i++) {
      if(i < level){
      items.push(<div style={{color:"black"}}>{cost[i]}</div>);
      }else{
         items.push(<div>{cost[i]}</div>);
      }
   }
   return items;
 }
 render(){
     return(
        <div className="col-10" style={{height:'250px' , width: '800px', backgroundColor:"white",marginTop:20,marginBottom:20}}>
           <div className="row">
           <div className="col-3" style={{
              height:'230px',
              width:'230px',
              marginTop:10,
              marginLeft:10,
              backgroundImage: "url("+this.props.merchant.coverImageId+")",
              backgroundSize: 'cover'}}>
           </div>
           <div className="col" style={{padding:'20px',marginLeft:10}}>
           <div className="row"><h5><strong>{this.props.merchant.shopNameTH}</strong></h5>
           {this.props.merchant.isOpen ==="Y" ?(<div style={{backgroundColor:"#1BC300",margin:5,marginLeft:10,borderRadius:5, padding:3,fontSize:13,color:"white"}}><strong>เปิดอยู่</strong></div>) 
           : 
           (<div style={{backgroundColor:"#999999",margin:5,marginLeft:10,borderRadius:5, padding:3,fontSize:13,color:"white"}}><strong>ปิดแล้ว</strong></div>)}
           </div>
           <div className="row" style={{color:"#999999"}}>{this.props.merchant.categoryName} | {this.calCost(parseInt(this.props.merchant.priceLevel))} | {this.props.merchant.subcategoryName} </div>
               <div className="row" style={{backgroundColor:"#EEEE",height:2,margin:15}} />
               <div className="row" style={{color:"#999999"}} dangerouslySetInnerHTML={{__html: this.props.merchant.highlightText}} />
               {this.props.merchant.categoryName === "ร้านอาหาร" ?
               ( <div className="row"  style={{color:"#999999"}} ><strong>เมนูแนะนำ : </strong> {this.props.merchant.recommendedItems}</div>)
               :
               (<div className="row"  style={{color:"#999999"}}><strong>สินค้าแนะนำ : </strong> {this.props.merchant.recommendedItems}</div>)}
               
               <div className="row">
               {this.props.merchant.facilities.map((facilitie)=>
               facilitie === 'ที่จอดรถ' ? (<img src={logoCar} alt="logo" height="30" width="30" style={{margin:5}} key={facilitie} />) 
               :
               (facilitie === 'สามารถนำสัตว์เลี้ยงเข้าได้' ? (<img src={logoPet} alt="logo" height="25" width="25" style={{margin:5}} key={facilitie} />) 
               :(facilitie === 'รับจองล่วงหน้า' ? (<img src={booking} alt="logo" height="25" width="25" style={{margin:5}} key={facilitie} />):(null)))
              )}
              </div>
            </div>
              
           
           </div>
        </div>
     );
 }
}
export default ShopCard;