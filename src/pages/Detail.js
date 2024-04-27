import { Button, Col, Container, Row } from 'react-bootstrap';
import './Detail.css';
import { Roadview } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetailPage(props)

{
  let {id} = useParams()
  
  let selectedItem = props.items.find((e)=>{
    return e.id == id
  })
  let [hideDom,setHideDom] = useState(false)
  // 컴포넌트는 return으로 화면을 그린다

  // useEffect : 오래걸리는 작업을 처리할때
  // 리액트의 컴포넌트 라이프사이클 (생성될때, 갱신될때, 없어질때) : 각 라이프사이클 마다 코드를 실행
  // mount : 생성될때, update : 갱신될때, unmount : 없어질때
  useEffect(()=>{
    // mount와 update시에 실행될 코드
    // html을 먼저 보여주고 오래걸리는 작업을 처리(서버요청 등....)
    console.log('mount 첫실행 + update갱신될때')

    setTimeout(()=>{
      //2초후 동작할 코드
      setHideDom(true)
    },2000)
    
    // unmount에 대해서는 return에 작성
    return(()=>{
      console.log('unmount 삭제될때')
    })
  })

  return(
    <>
      <Container>
        {
          hideDom === false ? (
            <div>
              hello
            </div>
          ):null
        }
        <Row>
          <Col>
            <img src={props.img[selectedItem.id]} height={'400px'}
            width={'300px'}/>
          </Col>
          <Col>
            <h4>{selectedItem.title}</h4>
            <p>{selectedItem.content}</p>
            <p>{selectedItem.price}원</p>
            <Button>주문하기</Button>
          </Col>
        </Row>
      </Container>
    </>
    
  )
}