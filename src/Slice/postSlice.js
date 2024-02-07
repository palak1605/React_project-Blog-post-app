import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    toggleLike: (state, action) => {
      const { postId } = action.payload;
      const postIndex = state.findIndex((item) => item === postId);
    
      if (postIndex !== -1) {
        console.log("item found");
        state.splice(postIndex, 1);
      } else {
        state.push(postId);
      }
    },
    
  },
});

export const { toggleLike } = postSlice.actions;
export default postSlice.reducer;
