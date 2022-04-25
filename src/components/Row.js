import React, { useState} from "react";

import Components from ".";

function Row(props) {
    const { edit, remove } = props;
    const [isEditing, setEditing] = useState(false);
    const [isVisible, setVisible] = useState(false);
    const [contact, setContact] = useState({ ...props.contact });
    const handleOnChange = (e) => {
        setContact((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const editCtc = () => setEditing(true);
    const save = () => setEditing(false);
    

    const removeCtc = () => {
        const input = window.confirm('Voulez-vous supprimer ce contact ?')
    };

    const show = () => setVisible(true)
    const hide = () => setVisible(false)

    return (
        <div href="#"
            className="justify-content-between list-group-item list-group-item"
            aria-current="true"
            onMouseEnter={show}
            onMouseLeave={hide}
        >
            <div className="mb-1 d-flex w-100 justify-content-between">
                < p className="mb-1 name">
                    {!isEditing ? (
                        contact.name
                    ) : (
                        <Components.Input
                            name='name'
                            value={contact.name}
                            onChange={handleOnChange}
                        />
                    )}
                </p>
                <small>{contact.category}</small>
            </div>
            <ul>
                {!isEditing ? (
                    contact.email
                ) : (
                    <Components.Input
                        name='email'
                        value={contact.email}
                        type='email'
                        width='60%'
                        onChange={handleOnChange}
                    />
                )}

                {!isEditing ? (
                    contact.phone
                ) : (
                    <Components.Input
                        name='phone'
                        value={contact.phone}
                        type='text'
                        onChange={handleOnChange}
                    />
                )}
            </ul>
            {isVisible ? (
                <ul className="list-controls list-inline">
                    {!isEditing && (
                        <li className="list-inline-item controls" onClick={editCtc} >
                            <i className="fas fa-edit">Edit</i>
                        </li>
                    )}

                    {isEditing && (
                        <li className="list-inline-item controls" onClick={save} >
                            <i className="fas fa-save">Save</i>
                        </li>
                    )}
                    <li className="list-inline-item controls" onClick={removeCtc} >
                        <i className="fas fa-trash">Delete</i>
                    </li>
                </ul>
            ) : (
                <div style={{ height: "24px"}}></div>
              )  } 
        </div>
    );
};

export default Row

