import styled from 'styled-components';
import EstilosGlobais from './assets/components/EstilosGlobais';
import Cabecalho from './assets/components/Cabecalho';
import BarraLateral from './assets/components/BarraLateral';
import Banner from './assets/components/Banner';
import Galeria from './assets/components/Galeria';


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default function App() {

  return (
   <FundoGradiente>
    <EstilosGlobais/>
    <AppContainer>
      <Cabecalho/>
      <MainContainer>
        <BarraLateral/>
          <ConteudoGaleria>
          <Banner
            texto='A galeria mais completa de fotos do espaço!'
            backgroundImage='../public/images/fotodestaque.png'
          />
          <Galeria/>
        </ConteudoGaleria>
      </MainContainer>
    </AppContainer>
   </FundoGradiente>
  )
}