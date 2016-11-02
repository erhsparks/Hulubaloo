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

export default toggleHeaderBkg;
