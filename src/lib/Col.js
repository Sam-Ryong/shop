/* eslint-disable */

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Box(props) {
  return (
    <Col>
      <img src={props.imgsrc} height="200px" />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
      <p>{props.exp}</p>
    </Col>
  );
}

function Imagebox(props) {
  return (
    <Container>
      <Row>
        {props.data.map((dt, i) => {
          return (
            <Box
              imgsrc={dt.url}
              title={dt.title}
              content={dt.content}
              exp={dt.exp}
            />
          );
        })}
      </Row>
    </Container>
  );
} // 이미지 첨부 3가지 방식
// 1. image url 사용
// 2. public 폴더에 저장된 이미지 (권장되는 방식임)
//3. public 폴더에 저장된 이미지 (가능한 방식)

export default Imagebox;
