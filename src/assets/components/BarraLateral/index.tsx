import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 13.25rem;
`

export default function BarraLateral(){
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                   <ItemNavegacao 
                    iconeAtivo='/icones/home-ativo.png'
                    IconeInativo='/icones/home-inativo.png'
                    ativo={true}
                   >
                    Início
                   </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}