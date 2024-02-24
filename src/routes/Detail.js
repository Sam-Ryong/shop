/* eslint-disable */
import { useParams } from "react-router-dom";

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
