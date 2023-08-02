import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("Enter text here")
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows={3} />
            </div>
            <button className="btn btn-primary" type='button' onClick={handleUpClick}>Convert To Uppercase</button>
        </div>
    )
}

export default TextForm