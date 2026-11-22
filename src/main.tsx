import React from 'react';
import { createRoot } from 'react-dom/client';
import MoodWalk from '../app';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoodWalk />
  </React.StrictMode>,
);
