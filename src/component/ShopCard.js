import React from 'react';
class ShopCard extends React.Component{
 constructor(props){
    super(props);
    this.state ={
    };
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
           <div className="col" style={{padding:'20px'}}>
               <div className="row">{this.props.merchant.shopNameTH}</div>
               <div className="row">{this.props.merchant.categoryName} | {this.props.merchant.subcategoryName} </div>
               <div className="row" style={{backgroundColor:"#EEEE",height:2,margin:15}} />
               <div className="row" dangerouslySetInnerHTML={{__html: this.props.merchant.highlightText}} />
               {this.props.merchant.categoryName == "ร้านอาหาร" ?
               ( <div className="row"><strong>เมนูแนะนำ : </strong> {this.props.merchant.recommendedItems}</div>)
               :
               (<div className="row"><strong>สินค้าแนะนำ : </strong> {this.props.merchant.recommendedItems}</div>)}
               
              
           </div>
           </div>
        </div>
     );
 }
}
export default ShopCard;