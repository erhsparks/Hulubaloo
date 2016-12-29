import React from 'react';

export const MailtoLink = ({ linkText }) => (
  <a target="_blank"
     href='mailto:erhsparks@gmail.com?&amp;subject=Hulubaloo&amp;body=I%20found%20your%20Hulubaloo%20site%20and...'>
     {linkText}
  </a>
);

export const MailtoLinkLi = () => (
  <li>
    <MailtoLink linkText="Contact" />
  </li>
);
