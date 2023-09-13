import React from 'react';
import {TextBody, ButtonDefault, Container} from '../components';
import useStore from '../state/store';

function HomeView() {
  const {toggleDarkMode} = useStore();

  return (
    <Container>
      <TextBody>Lorem ipsum</TextBody>
      <ButtonDefault onPress={toggleDarkMode}>
        Press to toggle dark mode
      </ButtonDefault>
    </Container>
  );
}

export default HomeView;
