import styled from 'styled-components';
import EstilosGlobais from './assets/components/EstilosGlobais';
import Cabecalho from './assets/components/Cabecalho';
import BarraLateral from './assets/components/BarraLateral';
import Banner from './assets/components/Banner';


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

export default function App() {

  return (
   <FundoGradiente>
    <EstilosGlobais/>
    <Cabecalho/>
    <BarraLateral/>
    <Banner
      texto='A galeria mais completa de fotos do espaço!'
      backgroundImage='../public/images/fotodestaque.png'
    />
   </FundoGradiente>
  )
}