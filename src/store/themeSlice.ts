import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  color: string;
}

const initialState: ThemeState = {
  color: '#688c8a',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
