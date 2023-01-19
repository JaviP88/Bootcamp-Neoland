import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import { CharacterList } from './Components/CharacterList/CharacterList';

const App = () => {
  
  return(
  <>
    <Header>
      <Title text={'iiiiiyoooo'} />
    </Header>
    <Main>
      <h2>Cards</h2>
      <CharacterList />
    </Main>
  </>
  )
}

export default App
