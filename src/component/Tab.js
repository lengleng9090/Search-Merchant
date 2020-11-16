import React from 'react';
class Tab extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div className="col-12" style={{backgroundColor:"#27397c",padding:10}}>
                <div style={{color:"white",marginLeft:20}}>
                หน้าแรก / ค้นหา
                </div>
            </div>
        );

    }
}
export default Tab;