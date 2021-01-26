import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`



export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo></QuizLogo>
      <Widget> 
        <Widget.Header>

        </Widget.Header>
        <Widget.Content>
          <h1>Meu Quiz</h1>
        </Widget.Content>
      </Widget>
      <Widget> 
        <Widget.Header>
          
        </Widget.Header>
        <Widget.Content>
        <h1>Quizes da galera</h1>

        </Widget.Content>
      </Widget>
      <Footer></Footer>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/regisbaldo"/>
    </QuizBackground>


  );
}
