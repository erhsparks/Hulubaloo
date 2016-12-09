const toggleHeaderBkg = () => {
  let header = document.getElementsByTagName('header')[0];
  let masthead = document.getElementsByClassName('masthead')[0];
  if (masthead) {
    let headerBottom = header.offsetHeight;
    let mastheadBottom = masthead.offsetHeight;

    let onMasthead = 'on-masthead';
    let offMasthead = 'off-masthead';

    let onClass;
    let offClass;

    if (document.body.scrollTop <= (mastheadBottom - headerBottom - 6)) {
      onClass = onMasthead;
      offClass = offMasthead;
    } else {
      onClass = offMasthead;
      offClass = onMasthead;
    }

    header.classList.add(onClass);
    header.classList.remove(offClass);
  } else {
    header.classList.add('off-masthead');
  }
};

export default toggleHeaderBkg;
