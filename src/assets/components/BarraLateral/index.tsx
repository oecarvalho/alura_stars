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

                   <ItemNavegacao 
                    iconeAtivo='/icones/mais-vistas-ativo.png'
                    IconeInativo='/icones/mais-vistas-inativo.png'
                    ativo={false}
                   >
                    Mais Vistas
                   </ItemNavegacao>

                   <ItemNavegacao 
                    iconeAtivo='/icones/mais-curtidas-ativo.png'
                    IconeInativo='/icones/mais-curtidas-inativo.png'
                    ativo={false}
                   >
                    Mais Curtidas
                   </ItemNavegacao>

                   <ItemNavegacao 
                    iconeAtivo='/icones/novas-ativo.png'
                    IconeInativo='/icones/novas-inativo.png'
                    ativo={false}
                   >
                    Novas
                   </ItemNavegacao>

                   <ItemNavegacao 
                    iconeAtivo='/icones/surpreenda-me-ativo.png'
                    IconeInativo='/icones/surpreenda-me-inativo.png'
                    ativo={false}
                   >
                    Surpreenda-me
                   </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}