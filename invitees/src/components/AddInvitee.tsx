import React, { useState } from "react";
import {IState as Props} from "../App";

interface IProps {
    people: Props["people"];
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddInvitee: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })

    }

    const handleClick = (): void => {
        if(!input.name || !input.age || !input.url) {
            return 
        }

        setPeople([
            ...people, {name: input.name, age: parseInt(input.age), url: input.url, note: input.note}
        ])

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input type="text" className="AddToList-input" onChange={handleChange} name="name" value={input.name} placeholder="Name" />
            <input type="number" className="AddToList-input" onChange={handleChange} name="age" value={input.age} placeholder="Age" />
            <input type="text" className="AddToList-input" onChange={handleChange} name="url" value={input.url} placeholder="Image Url" />
            <textarea className="AddToList-input" onChange={handleChange} name="note" value={input.note} placeholder="Note" />
            <button className="AddToList-btn" onClick={handleClick}>Add to List</button>
        </div>
    )
}

export default AddInvitee