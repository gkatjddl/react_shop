import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav ,Navbar, Button, Row, Col} from 'react-bootstrap';
import './App.css';
import data from './data'
import {num1, num2, num3} from './data.js'
// 이미지를 사용하려면 import
import mainBG from './data.js'
import { useState } from 'react';
import DetailPage from './pages/Detail.js';
import { Routes, Route, useNavigate, Outlet, Link } from 'react-router-dom';
import Cart from './pages/Cart.js';


function App() {
  // css를 제공해주는 사이트 : bootstrap
  
  // 자바스크립트 파일은 확장자명을 생략(.js 안붙임)

  let [items, setItems] = useState(data);
  let [photo, setPhoto] = useState(['/bird-adalt.jpg','/bird-baby.jpg','/fish.jpg','/logo192.png']);
  let navigate = useNavigate()

  return (
    <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='/logo192.png' width={'70px'} height={'70px'}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/Detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>about</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로가기</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로가기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
      <Route path='/' element={
        <>
        <div className='main-bg'></div>
        <Container>
        <Row>
          {/* data갯수와 image가 바뀔수있으니 useState처리*/}
          {/* map을 통해서 useState(data) 만큼 반복*/}
          {items.map((item,index)=>(<ItemCol key={index} data={item} img={photo[index]}/>
              ))}
        </Row>
      </Container>
      </>
      }></Route>
      <Route path='/detail/:id' element={<DetailPage items= {items} id={0} img={photo}/>}></Route>
      {/*
      <Route path='/detail/1' element={<DetailPage items= {items} id={1} img={photo}/>}></Route>
      <Route path='/detail/2' element={<DetailPage items= {items} id={2} img={photo}/>}></Route>
      */}
      
      <Route path='/about' element={<AboutPage/>}>
        <Route path='address' element={<div>주소</div>}></Route>
        <Route path='location' element={<div>위치</div>}></Route>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<div>그 외의 페이지(404)</div>}></Route>
      </Routes>
      {/*
      <Link to="/about/address"><Button variant='warning'>리액트 부트스트랩 버튼</Button></Link>
       */}
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

// 어바웃페이지의 컴포넌트
function AboutPage(){
  return(
    <>
      <div>
        <h4>어바웃 페이지</h4>
        <Outlet/>
      </div>
    </>
  )
}