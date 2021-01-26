import styled from 'styled-components';
import db from '../db.json';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import { Fragment } from 'react';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
export const QuizContainer = styled.div`
  width:80%;
  padding-top: 45px;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}> 
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz de vôlei?</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Como funciona?</h1>

            <p>No quiz veremos perguntas sobre fundamentos do vôlei, ações corretas a serem tomadas em dada situação, características das modalidades de vôlei e etc.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outros quizes</h1>
          </Widget.Header>
          <Widget.Content></Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joseliosamy"/>
    </QuizBackground>
  )
}
