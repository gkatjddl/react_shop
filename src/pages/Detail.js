import { Button, Col, Container, Row } from 'react-bootstrap';
import './Detail.css';
import { Roadview } from 'react-kakao-maps-sdk';

export default function DetailPage(props)
{
  // 컴포넌트는 return으로 화면을 그린다

  return(
    <>
      <Container>
        <Row>
          <Col>
            <img src='/bird-baby.jpg' height={'400px'}
            width={'300px'}/>
          </Col>
          <Col>
            <h4>{props.items[1].title}</h4>
            <p>{props.items[1].content}</p>
            <p>{props.items[1].price}원</p>
            <Button>주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
    
  )
}