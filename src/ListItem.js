import React from 'react'

function ListItem (props) {
    const {
        info: {
            id,
            title
        },
        removeBtn
    } = props

    return (
        <li>
            <h4>{title}</h4>

            <button onClick={() => removeBtn(id)}>
                Remover
            </button>
        </li>
    )
}

export default ListItem