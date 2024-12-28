import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';

const ThemeSwitcher = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </button>
  );
};

export default ThemeSwitcher;
