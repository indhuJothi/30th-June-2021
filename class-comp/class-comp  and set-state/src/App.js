
import React from 'react';
import './App.css';
import Blog from './func-comp';
import './style.css';
import { isMyarrempty } from './utils';

class App extends React.Component {
  state={
    showblogs:true,
    mapArr:[
    {
    id:1,
    title:'Paragraph',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    Likecount:0

  },
  {
    id:2,
    title:'Paragraph',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    Likecount:0
  },
  {
    id:3,
    title:'Paragraph',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    Likecount:0
  }

  ]
}
  Like=(pos)=>{
   const updatedarr=this.state.mapArr;
   const updatedobj=updatedarr[pos];
   updatedobj.Likecount=updatedobj.Likecount+1;
   updatedarr[pos]=updatedobj;
   this.setState({mapArr:updatedarr})
  }
 

  hideList=()=>{
   
    // let updatedvalue=!this.state.showblogs
    this.setState((prevState,prevProps)=>{
      return {showblogs:!prevState.showblogs}
    });
    console.log(this.state.showblogs)
  
    
  }
  
  render(){
    const myFunc=isMyarrempty(this.state.mapArr)?[]:this.state.mapArr.map((item,pos)=>{
      return(
       <Blog key={item.id} title={item.title} description={item.description} Likecount={item.Likecount} Like={()=>{this.Like(pos)}}/>
         )
        
    })
  return (
    <div className="App">
      <button onClick={this.hideList}>{this.state.showblogs ? 'Hide List' : 'Show List'}</button>
      <br></br>
        {
          this.state.showblogs ? myFunc : null
        
        }
       
    </div>
  );
  }
}

export default App;
