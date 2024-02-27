/*eslint-disable*/
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";

//defaultActivaKey는 처음 방문했을 때 눌려져잇을탭
function FillExample(props) {
  let [num, setNum] = useState(0);
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setNum(0);
            }}
          >
            Button0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setNum(1);
            }}
          >
            Button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setNum(2);
            }}
          >
            Button2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Content num={num} data={props.data} />
    </>
  );
}

function Content({ num, data }) {
  // props 전달 방식의 또 다른 문법
  /*
  if (num == 0) {
    return <div>내용0</div>;
  }
  if (num == 1) {
    return <div>내용1</div>;
  }
  if (num == 2) {
    return <div>내용2</div>;
  }*/
  let [ani, setAni] = useState("");
  useEffect(() => {
    let timer = setTimeout(() => {
      setAni("end");
    }, 100);
    return () => {
      setAni("");
      clearTimeout(timer);
    };
  }, [num]);
  return (
    <div className={`start ${ani}`}>
      {
        [
          <div>{data.title}</div>,
          <div>{data.exp}</div>,
          <div>{data.content}</div>,
        ][num]
      }
    </div>
  ); // list[0],list[1] 등과 같이 편법
}

/*
전환애니메이션 만들기
1. 애니메이션 동작 전 className 만들기
2. 애니메이션 동작 후 className 만들기
3. className에 transition 속성 추가
4. 원할때 2번 className 부착
*/

export default FillExample;
