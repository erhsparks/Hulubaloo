const headerHandler = () => {
  toggleHeaderBkg();

  watchForNewComponents();
  window.onscroll = () => toggleHeaderBkg();
};

const watchForNewComponents = () => {
  let observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      document.body.scrollTop = 0;
      toggleHeaderBkg();
    });
  });

  let toObserve = { childList: true };

  let home = document.getElementsByClassName('hulubaloo-home')[0];
  observer.observe(home, toObserve);
};

const toggleHeaderBkg = () => {
  let header = document.getElementsByTagName('header')[0];
  let masthead = document.getElementsByClassName('masthead')[0];

  if (masthead) {
    let toggles = findOnOffs(header, masthead);

    header.classList.add(toggles.on);
    header.classList.remove(toggles.off);
  } else {
    header.classList.add('off-masthead');
  }
};

const findOnOffs = (header, masthead) => {
  let headerBottom = header.offsetHeight;
  let mastheadBottom = masthead.offsetHeight;

  let onMasthead = 'on-masthead';
  let offMasthead = 'off-masthead';

  let toggles = {};

 // the 6px are purely for human observers -- when scrolling quickly, I found
 // that it was less jarring to start the transition before the header was
 // fully off the mast.
  if (document.body.scrollTop <= (mastheadBottom - headerBottom - 6)) {
    toggles.on = onMasthead;
    toggles.off = offMasthead;
  } else {
    toggles.on = offMasthead;
    toggles.off = onMasthead;
  }

  return toggles;
};

export default headerHandler;
