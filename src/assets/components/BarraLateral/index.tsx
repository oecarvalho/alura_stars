import styled from "styled-components"

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
                    <li>
                        <a href="#">Início</a>
                    </li>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}