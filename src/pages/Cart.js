import { Button, Table } from 'react-bootstrap';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../store';

// /cart로 이동하면 보여줄 컴포넌트
export default function Cart()
{
  // 등록된 슬라이스를 가져다가 쓴다(리덕스)
  let slice1 = useSelector((state)=>{return state});
  console.log(slice1.slice1)
  let data = useSelector((state)=>{return state.slice2});
  console.log(data)
  
  // 리덕스 슬라이스 변경 기능 변수화
  let dispatch = useDispatch();
  console.log(slice1.slice1);
  return(
    <div>
      {/*<Button onClick={()=>{
        dispatch(changeData('2'))
        }}>슬라이스1 변경</Button>
        */}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>설명</th>
          <th>갯수</th>
          <th>추가</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{e.title}</td>
              <td>{e.content}</td>
              <td>0</td>
              <td><Button>+</Button></td>
            </tr>
          ))
        }
      </tbody>
    </Table>
    </div>
  )
}