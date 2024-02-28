import { configureStore, createSlice } from "@reduxjs/toolkit";
import member from "./store/member.js";

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
