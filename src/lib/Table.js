import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addLevel } from "../store/member.js";

function BasicExample() {
  //리덕스에 정의된 함수를 사용하기 위해
  let member = useSelector((state) => {
    return state.member; //member 만 state로 가져옴
  });
  let dispatch = useDispatch();
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>맵</th>
          <th>몬스터</th>
          <th>경험치</th>
        </tr>
      </thead>
      <tbody>
        {member.map((mem) => {
          return (
            <tr>
              <td>{mem.id}</td>
              <td>{mem.title}</td>
              <td>
                {mem.exp}
                <button
                  onClick={() => {
                    dispatch(addLevel(mem.id));
                  }}
                >
                  +
                </button>
              </td>
              <td>{mem.content}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
