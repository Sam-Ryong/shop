/* eslint-disable */
import { useParams } from "react-router-dom"; // url의 파라미터를 사용하기위한 라이브러리
import styled from "styled-components";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
//styled-component 장점 : 다른 js 파일에 간섭 안함
//간섭 방지용으로 .css 파일을 App.module.css 로 저장하면 됨
// 또 장점은 로딩시간이 단축됨 전체 css를 다운로드 하지 않기 때문에
let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;
/*
컴포넌트의 Lifecycle
페이지에 장착 (mount)
업데이트 (update)
제거 (unmount)
*/

function Detail(props) {
  let [count, setCount] = useState(0);
  let [toggle, setToggle] = useState(true);
  let [alert, setAlert] = useState(false);
  let { id } = useParams();
  let [msg, setMsg] = useState("");
  let key;
  useEffect(() => {
    // 컴포넌트 mount, update시 실행될 코드
    // useEffect는 html이 랜더링이 다 되고 실행됨. 그래서 동작을 효율적으로 할 수 잇음
    // 시간이 오래걸리는 작업(오래걸리는 연산, 서버에서 데이터 가져오기, 타이머장착 등)
    let timer = setTimeout(() => {
      setToggle(false);
    }, 2000); //2000ms(2초) 후에 toggle state를 false로 바꿈 그러면 재랜더링 일어남
    return () => {
      clearTimeout(timer); // 재 랜더링마다 타이머가 계속생성되면 안되니까 기존거는 지워준다
    }; // return은 선택임 이 안의 코드를 useEffect 직전에 실행해줌
    // 그리고 unmount 시에 return 안의 코드가 한번 실행됨
  }, []);
  // [] 안의 것은 dependency로 이게 변할 때만 실행됨
  // 물론 mount 될 때에는 무조건 한번 실행되긴 함
  // [] 안에 아무것도 넣지 않으면 어떠한 것이 update 되어도 실행되지 않음
  // mount 할때만 실행하고 싶으면 아무것도 안넣으면 됨
  useEffect(() => {
    if (isNaN(msg)) {
      setAlert(true);
    } else {
      setAlert(false);
    }
  }, [msg]);

  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].id == id) {
      key = i;
    }
  }
  return (
    <div className="container">
      <YellowBtn
        bg="blue"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </YellowBtn>
      {toggle ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={props.data[key].url} height="200px" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.data[key].title}</h4>
          <p>{props.data[key].content}</p>
          <p>{props.data[key].exp}</p>
          {alert ? <div className="alert alert-warning">숫자만</div> : null}
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">
              말걸기
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            />
          </InputGroup>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
