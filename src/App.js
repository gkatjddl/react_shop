import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav ,Navbar, Button, Form, Row,Col} from 'react-bootstrap';
import './App.css';
import data from './data'
import {num1, num2, num3} from './data.js'
// 이미지를 사용하려면 import
import mainBG from './data.js'
import { useState } from 'react';


function App() {
  // css를 제공해주는 사이트 : bootstrap
  
  // 자바스크립트 파일은 확장자명을 생략(.js 안붙임)

  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['/bird-adalt.jpg','/bird-baby.jpg','/fish.jpg']);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='/logo192.png' width={'70px'} height={'70px'}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">about</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{
  /*
        <div className='main-bg'>

      </div>

      <div style={{backgroundImage:`url(/logo192.png)`, height:'300px', width:'100%', backgroundSize:'cover', backgroundPosition:'center'}}>

      </div>
  */
}

      <div className='main-bg'>

      </div>
      <Container>
      <Row>
        {/* data갯수와 image가 바뀔수있으니 useState처리*/}
        {/* map을 통해서 useState(data) 만큼 반복*/}
        {items.map((item,index)=>(<ItemCol key={index} data={item} img={photo[index]}/>
            ))}
      </Row>
      <Row>
        <Col>4</Col>
        <Col>5</Col>
        <Col>6</Col>
      </Row>
    </Container>

      <br/>

      <Button variant="primary">기본버튼</Button>{''}
    </div>
  );
}

export default App;

// 컴포넌트는 맨 앞글자를 대문자로
// return에 html(jsx)코드 
// 컴포넌트로 분리를 했으면 props로 받아와야하는 부분을 변경

function ItemCol(props)
// 그때그때 바뀌는 부분만 props처리
{
  return(
    <>
      <Col><img src={props.img} width={'300px'} height={'300px'}/>
        <h4>{props.data.title}</h4>
        <p>{props.data.price}원</p>
      </Col>
    </>
  )
}
