import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  } else store = configureStore();

  const root = document.getElementById('root');

  ReactDOM.render(<Root store={store} />, root);

  const toggleHeaderBkg = () => {
    let header = document.getElementsByTagName('header')[0];
    let mastheadBottom = 307;

    let onMasthead = 'on-masthead';
    let offMasthead = 'off-masthead';

    let onClass;
    let offClass;

    if (document.body.scrollTop <= mastheadBottom) {
      onClass = onMasthead;
      offClass = offMasthead;
    } else {
      onClass = offMasthead;
      offClass = onMasthead;
    }

    header.classList.add(onClass);
    header.classList.remove(offClass);
  };

  window.onscroll = () => toggleHeaderBkg();
});
