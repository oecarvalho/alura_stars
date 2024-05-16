import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Images"

const GaleriaContainer = styled.section`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`

export default function Galeria({fotos = [], aoFotoSelecionada}){
    return(
        <>
            <Tags/>
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela nossa Galeria</Titulo>
                    <ImagensContainer>
                        {fotos.map(foto=> <Imagem 
                        aoZoomSolicitado={aoFotoSelecionada}
                        key={foto.id} 
                        foto={foto}/>)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
            
           
        </>
    )
}