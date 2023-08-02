import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
    }
    const handleClearClick = () => {
        setText('')
    }
    const handleSentClick = () => {
        setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
    }
    const handleCapClick = () => {
        setText(text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "))
    }
    const handleAltClick = () => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                result += text.charAt(i).toUpperCase();
            } else {
                result += text.charAt(i).toLowerCase();
            }
        }
        setText(result)
    }
    const handleTitleClick = () => {
        setText(text
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "))
    }
    const handleInvClick = () => {
        let result = "";
        for (let i = 0; i < text.length; i++) {
            const char = text.charAt(i);
            if (char === char.toUpperCase()) {
                result += char.toLowerCase();
            } else {
                result += char.toUpperCase();
            }
        }
        setText(result)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows={3} />
                </div>
                <button className="btn btn-primary mx-1" type='button' onClick={handleSentClick}>Sentence Case</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleCapClick}>Capitalized Case</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleAltClick}>Alternating Case</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleTitleClick}>Title Case</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleInvClick}>Inverse Case</button>
                <button className="btn btn-primary mx-1" type='button' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words</p>
                <p>{text.length} characters</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm