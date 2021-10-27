import React, { useState } from 'react';
import colors from '../utils/colors.json'

const UpdateGenerator = ({
    setCategory,
    setSelectedColor
}) => {
    const [newCategory, setNewCategory] = useState("");
    const [newColor, setNewColor] = useState("");


    const heddleChange = (e) => {
        setNewCategory(e.target.value);
    }

    const heddleSelect = (e) => {
        setNewColor(e.target.value);
    }

    const heddleSubmit = (e) => {
        e.preventDefault();
        setCategory(newCategory);
        setSelectedColor(newColor);
        setNewCategory("");
    }

    return (
        <div className="generator" >
            <form
                onSubmit={heddleSubmit}
                className="formContainer">
                <label >צבע רקע-שם קטגוריה</label>
                <div>
                    <select
                        onChange={heddleSelect}
                    >
                        {colors.map((color) => (
                            <option
                                key={color.value}
                                value={color.value}>
                                {color.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label >שם קטגוריה</label>
                    <input
                        type="text"
                        value={newCategory}
                        onChange={heddleChange}
                    />
                </div>
            </form>
        </div>
    )
}

export default UpdateGenerator;
