import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { MyArticleType } from '../types/myArticleType';

export interface UserState {
  clips: MyArticleType[];
}

const initialState: UserState = {
  clips: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addClip: (state, action: PayloadAction<MyArticleType>) => {
      const article: MyArticleType = action.payload;
      state.clips.push(article);
    },
    deleteClip: (state, action: PayloadAction<MyArticleType>) => {
      const article: MyArticleType = action.payload;
      state.clips = state.clips.filter((clip) => clip.urlToImage !== article.urlToImage);
    },
  },
});

export const { addClip, deleteClip } = userSlice.actions;

export default userSlice.reducer;
