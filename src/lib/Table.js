import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function BasicExample() {
  let member = useSelector((state) => {
    return state.member; //member 만 state로 가져옴
  });
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>직업</th>
          <th>레벨</th>
          <th>스펙</th>
          <th>포지션</th>
        </tr>
      </thead>
      <tbody>
        {member.map((mem, i) => {
          return (
            <tr>
              <td>{i}</td>
              <td>{mem.job}</td>
              <td>{mem.level}</td>
              <td>{mem.spec}</td>
              <td>{mem.position}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BasicExample;
