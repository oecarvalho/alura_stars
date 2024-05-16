import styled from 'styled-components'
import tags from './tags.json'

const TagsEstilizadas = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    p{
        font-size: 24px;
        color: #d9d9d9;
    }
`

const Tag = styled.div`
    display: flex;
    gap: 18px;

    button{
        padding: 10px 8px;
        color: #fff;
        border-radius: 10px;
        background: rgba(217, 217, 217, 0.3);
        font-size: 18px;
        border: 2px solid transparent;
        &:hover {
        border-color: #C98CF1;
        }
    }
`

export default function Tags(){
    return(
        <TagsEstilizadas>
            <p>Busque por Tags: </p>
            <Tag>
                {tags.map(tag => <button key={tag.id}>{tag.titulo}</button>)}
            </Tag>
        </TagsEstilizadas>
    )
}