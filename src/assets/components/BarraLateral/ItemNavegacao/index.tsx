import styled from "styled-components"


const ItemListaEstilizado = styled.li`
    font-size: 1rem;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${props => props.$ativo ? '#7b78e5' : '#d9d9d9'};
    font-weight: ${props => props.$ativo ? 'bold': '400'};
    display: flex;
    align-items: center;
    gap: 22px;
`

export default function ItemNavegacao({children, iconeAtivo, IconeInativo, ativo = false}){
    return(
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : IconeInativo} alt="" />
            {children}
        </ItemListaEstilizado>
    )
}