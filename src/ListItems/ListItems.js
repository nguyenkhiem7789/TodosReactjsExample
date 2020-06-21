import React from 'react'
import './ListItems.css'
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import FlipMove from "react-flip-move";

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text"
                       id={item.key}
                       value={item.text}
                       onChange={(e) => {
                           props.setUpdate(e.target.value, item.key)
                       }}
                />
                <span>
                    <FontAwesomeIcon
                        className="faicons"
                        icon={faTrash}
                        onClick={() => props.deleteItem(item.key)}
                    />
                </span>
            </p>
        </div>
    });
    return (
        <h1>
            <FlipMove duration={300}>
                {listItems}
            </FlipMove>
            </h1>
    )
}

export default ListItems;