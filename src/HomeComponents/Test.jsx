import React from 'react';
import { Fade, Zoom, Slide, Bounce, Rotate } from 'react-awesome-reveal';

const Test = () => (
  <div>
    <Fade direction="up">This is a Fade animation</Fade>
    <Zoom>Zoom Animation</Zoom>
    <Slide direction="left">Slide Animation</Slide>
    <Bounce>Bounce Animation</Bounce>
    <Rotate>Rotate Animation</Rotate>
  </div>
);

export default Test;
