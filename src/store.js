import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "삼룡",
  reducers: {
    setUser(state) {
      return "홍" + state;
    },
    setDefault() {
      return "";
    },
  },
}); // state 하나 생성

export let { setUser, setDefault } = user.actions; // 함수를 다른곳에서 사용할 수 있게 export

let stock = createSlice({ name: "stock", initialState: [74, 75, 76] });
let member = createSlice({
  name: "member",
  initialState: [
    { job: "a", level: 74, spec: 1741, position: "L3" },
    { job: "b", level: 75, spec: 1741, position: "L1" },
    { job: "c", level: 76, spec: 1741, position: "L2" },
  ],
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    member: member.reducer, // state 등록
  },
});

/*
공유가 필요한 state만 넣어라~!~!
*/
