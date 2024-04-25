import React from 'react'

function List(props) {


    return (
        <div>
            {props.items.map((ele) => {
                return (
                    <div key={ele.id}>
                        <div>{ele.visible ? ele.item : "The content is hidden"}</div>
                        <button onClick={() => props.toggleVisibility(ele.id)}>toggle</button>
                    </div>
                )
            })}
        </div>
    )

}

export default List