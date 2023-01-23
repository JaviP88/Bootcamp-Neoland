import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import H2 from './Components/UI/H2/H2'
import { CharacterList } from './Components/CharacterList/CharacterList';

const App = () => {
  
  return(
  <>
    <Header>
      <Title text={'Rick & Morty'} />
    </Header>
    <Main>
      <H2 text={'Character'} />
      <CharacterList />
    </Main>
  </>
  )
}

export default App
