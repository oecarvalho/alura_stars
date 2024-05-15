import styled from 'styled-components';
import EstilosGlobais from './assets/components/EstilosGlobais';
import Cabecalho from './assets/components/Cabecalho';
import BarraLateral from './assets/components/BarraLateral';


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
   </FundoGradiente>
  )
}