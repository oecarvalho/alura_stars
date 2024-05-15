import styled from "styled-components"
import CampoDeTexto from "../CampoDeTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        max-width: 13.25rem;
    }
`

export default function Cabecalho() {
    return(
        <HeaderEstilizado>
            <img src="../public/images/logo.png" alt="" />
            <CampoDeTexto/>
        </HeaderEstilizado>
    )
}