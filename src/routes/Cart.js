import Table from "../lib/Table.js";
import { useDispatch, useSelector } from "react-redux"; // 리덕스 사용하기 위해
import { setUser, setDefault } from "../store.js";

function Cart() {
  let user = useSelector((state) => {
    return state.user;
  }); // redux의 모든 state가 남음
  let dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(setUser());
        }}
      >
        변경
      </button>
      <button
        onClick={() => {
          dispatch(setDefault());
        }}
      >
        변경
      </button>
      {user}
      <Table></Table>
    </div>
  );
}

export default Cart;
