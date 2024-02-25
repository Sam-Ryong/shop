/* eslint-disable */
import { useParams } from "react-router-dom";
import styled from 'styled-components'
//styled-component 장점 : 다른 js 파일에 간섭 안함
//간섭 방지용으로 .css 파일을 App.module.css 로 저장하면 됨
// 또 장점은 로딩시간이 단축됨 전체 css를 다운로드 하지 않기 때문에
let YellowBtn = styled.button`
background : ${props => props.bg};
color : ${props => props.bg == "blue" ? "white" : "black"};
padding : 10px;
`

function Detail(props) {
  let { id } = useParams();
  let key;
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].id == id) {
      key = i;
    }
  }
  return (
    <div className="container">
      <YellowBtn bg = "blue">버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img src={props.data[key].url} height="200px" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.data[key].title}</h4>
          <p>{props.data[key].content}</p>
          <p>{props.data[key].exp}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
