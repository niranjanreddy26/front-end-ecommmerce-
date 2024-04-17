
import React from 'react';
import '../App.css';
// import {Routes,Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

class Lightgreen extends React.Component{
  state={
    products :[
      {
        "_id": "1",
        "title": "Airpods Max",
        "src": [
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022364000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-green-witb?wid=463&hei=680&fmt=jpeg&qlt=90&.v=1603906259000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-smartcase-green-witb?wid=568&hei=680&fmt=jpeg&qlt=90&.v=1603906270000",
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-lightning-usbc-witb?wid=150&hei=680&fmt=jpeg&qlt=90&.v=1603906259000"
          ],
        "description": "Up to 20 hours of listening time with a single charge",
        "content": "Get 6 months of Apple Music free with your AirPods Max.",
        "price": 549,
        "colors":["spacegrey","pink","lightgreen","skyblue","silver"],
        "count": 1
        }
    ],
    index:0
  };
  myRef = React.createRef();
  handleTab=index=>{
    this.setState({index:index})
    const images = this.myRef.current.children;
    for(let i=0 ;i<images.length;i++){
      images[i].className=images[i].className.replace("active","");
    }
    images[index].className="active";
  };
  componentDidMount(){
    const {index} =this.state;
    this.myRef.current.children[index].className="active";
  }

  render(){
    const {products,index} = this.state;
    return(
      <div className="app">
        {
        products.map(item =>(
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt=""/>
            </div>
             <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <div className="colors">
                {
                  item.colors.map((color, index)=>(
                    <Link to={`/${color}`}><button style={{background: color}} key={index}></button></Link>
                  ))
                }
              </div>
              {/* <Colors/> */}
              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb" ref={this.myRef}>{
                item.src.map((img,index)=>(
                  <img src={img} alt="" key={index}
                  onClick={()=> this.handleTab(index)}
                  />
                ))
              }</div>
              <button className="cart">Add to Cart</button>
             </div>
            
          </div>
        ))
        }
      </div>
    );
  };
}
export default Lightgreen;
