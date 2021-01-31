/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');// estado inicial

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Vôlei Quiz</title>
        <meta name="title" content="Vôlei Quiz - Perguntas sobre vôlei" />
        <meta name="description" content="Teste seus conhecimentos sobre o vôlei agora no Vôlei Quiz!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://voleiquiz.vercel.app/" />
        <meta property="og:title" content="Vôlei Quiz - Perguntas sobre vôlei" />
        <meta property="og:description" content="Teste seus conhecimentos sobre o vôlei agora no Vôlei Quiz!" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz de vôlei?</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault(); // trava o reloa
              router.push(`/quiz?name=${name}`);
              // eslint-disable-next-line no-console
              console.log('q?');

              // router
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(event) => setName(event.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Outros quizes</h1>
          </Widget.Header>
          <Widget.Content />
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/joseliosamy" />
    </QuizBackground>
  );
}
