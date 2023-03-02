import React, { Component,useState} from 'react'
import './cards.css'
import { Card, Col, Container, Row } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Cards(props) {  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const AddItems=(e)=>{
    e.preventDefault();
    if (isLoggedIn) {
      console.log('items added to cart');
    } else  {
      console.log('Please login to continue');
    }
  }
  
  return (
    
    <div className="App ">
      <Container >
        <Row >
          <Col md={3} >
            <Card>
              <img src="https://cdn.dribbble.com/userupload/4966514/file/original-e2ef20e465d76a83d1f67942b0ab0915.png?compress=1&resize=700x525&vertical=top" className="card-img-top" alt="..." />


              <div className="card-body">
                <div className="card-info">
                  <img src="https://cdn.dribbble.com/users/68544/avatars/mini/4c145fcf55db7976aa63183a03c7aa65.png?1672415553" alt="" className='Cardlogo' />
                  <p className="card-text">{props.productname}</p> 
                  <div > {isLoggedIn ? <FavoriteBorderIcon /> : null} 
                    <i className="fa-solid fa-eye fa-right "><span className="value">10.3 k</span></i></div>
                </div>
                <div className="descText "> {props.discription}</div>
                <div className="stars " > 
                <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                </div>
                <a href="#" className="btn btn-primary d-grid mt-2"   onClick={AddItems} disable={isLoggedIn ? "true" : "false"}>Add To Cart</a>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <img src="https://cdn.dribbble.com/userupload/4966514/file/original-e2ef20e465d76a83d1f67942b0ab0915.png?compress=1&resize=700x525&vertical=top" className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="card-info">
                  <img src="https://cdn.dribbble.com/users/6192982/avatars/mini/fbf9dbd07cb26413a11d71adbbccd128.png?1626675731" alt="" className='Cardlogo' />
                  <p className="card-text">{props.productname}</p>
                  <div>{isLoggedIn ? <FavoriteBorderIcon /> : null}
                    <i className="fa-solid fa-eye fa-right"><span className='value'>10.3 k</span></i></div>
                </div>
                <div className="descText "> {props.discription} </div>
                <div className="stars"> 
            <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                </div>
                <a href="#" className="btn btn-primary d-grid mt-2"  onClick={AddItems}  disable={isLoggedIn ? "true" : "false"} >Add To Cart</a>
              </div>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <img src="https://cdn.dribbble.com/userupload/4966514/file/original-e2ef20e465d76a83d1f67942b0ab0915.png?compress=1&resize=700x525&vertical=top" className="card-img-top" alt="..." />
              <span className="card-body">
                <div className="card-info">
                  <img src="https://cdn.dribbble.com/users/6192982/avatars/mini/fbf9dbd07cb26413a11d71adbbccd128.png?1626675731" alt="" className='Cardlogo' />
                  <p className="card-text">{props.productname}</p>
                  <div>{isLoggedIn ? <FavoriteBorderIcon /> : null}
                    <i className="fa-solid fa-eye fa-right"><span className='value'>10.3 k</span></i></div>
                </div>
                <div className="descText "> {props.discription} </div>
                <div className="stars"> 
                  <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                </div>
                <a href="#" className="btn btn-primary d-grid mt-2"  onClick={AddItems}  disable={isLoggedIn ? "true" : "false"}>Add To Cart</a>
              </span>
            </Card>
          </Col>
         
        </Row>
      </Container>
    </div>
    
  )
}

export default Cards;