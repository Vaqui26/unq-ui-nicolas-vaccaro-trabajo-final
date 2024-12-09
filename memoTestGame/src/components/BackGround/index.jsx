import React from 'react';
import { ImageBackGround, Container } from './mixins';

const BackGround = ({ children }) => {
  return (
    <ImageBackGround>
        <Container>
            {children}
        </Container> 
    </ImageBackGround>
  );
};

export default BackGround;