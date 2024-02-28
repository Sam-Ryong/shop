import { createSlice } from "@reduxjs/toolkit";

let member = createSlice({
  name: "member",
  initialState: [],
  reducers: {
    addLevel(state, i) {
      let ind = 0;
      for (let j = 0; j < state.length; j++) {
        if (state[j].id === i.payload) {
          ind = j;
        }
      }
      state[ind].exp = state[ind].exp + 1; //state가 object, array면 return 할 필요 엄슴
      //payload로 파라미터를 받을 수 잇음
    },
    addCart(state, param) {
      state.push(param.payload);
    },
  },
});

export let { addLevel, addCart } = member.actions;
export default member;
