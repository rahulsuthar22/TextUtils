import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('click on button...');
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleLoClick = () => {
        // console.log('click on button...');
        let newText = text.toLowerCase();
        setText(newText);

    }
    const handleCopyClick = () => {
        // console.log('click on button...');
        navigator.clipboard.writeText(text);
        alert('copied')

    }
    const handleOnChange = (event) => {
        // console.log('on chnage');
        setText(event.target.value);

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleClear = ()=>{
        setText("");
    }
    const [text, setText] = useState('Enter the text here...');

    let myStyle = {
        backgroundColor: 'red',
        color: 'blue'
    }

    return (
        <div className={`px-5 my-3 bg-${props.mode}`}>
            <h2 className="heading text-center" style={myStyle}>Enter the value to do the following operation</h2>
            <textarea value={text} onChange={handleOnChange} className='form-control' name="textarea" rows="10"></textarea>
            <div className="my-3">
                <button onClick={handleUpClick} className="btn btn-primary mx-2">UpperCase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-2">LowerCase</button>
                <button onClick={handleCopyClick} className="btn btn-primary mx-2">Copy</button>
                <button onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove extra spaces</button>
                <button onClick={handleClear} className="btn btn-primary mx-2">Clear</button>
            </div>
            <div className={`below text-${props.mode === 'light'?'dark':'light'}`}>
            <h4>Your text summary</h4>
            <p>{text.split(/[ ]+/).length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(/[ ]+/).length} minutes to read</p>
            </div>
        </div>
    )
}
