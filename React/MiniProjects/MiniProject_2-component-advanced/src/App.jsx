import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import H2 from './Utils/H2/H2';
import { CharacterList } from './Components/CharacterList/CharacterList';

const App = () => {
  
  return(
  <>
    <Header>
      <Title text={'iiiiiyoooo'} />
    </Header>
    <Main>
      <H2 text={'Listado de cartitas'} />
      <CharacterList />
    </Main>
  </>
  )
}

export default App
