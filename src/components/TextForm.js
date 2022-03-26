import React, { useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE!", "Success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "Success");
    }

    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "Success");
    }

    const handleFuClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("First letter Capitalized!", "Success");
    }

    const handleRSClick = ()=>{
        // console.log("Uppercase was clicked: " + text);
        let newText = text.replace(/[&!@/#,+()$~%.'":*?<>{}0-9]/g, '');
        setText(newText);
        props.showAlert("All Characters Removed!", "Success");
    }

    const handleCopyText = ()=>{
        // console.log("Uppercase was clicked: " + text);
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard!", "Success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text, setText] = useState('');
//   setText("new text");  // Correct way to change state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} placeholder="Type Something here..." onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:  props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={handleFuClick}>Cap_fWord</button>
        <button className="btn btn-success mx-1" onClick={handleRSClick}>Remove Symbols</button>
        <button className="btn btn-success mx-1" onClick={handleCopyText}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* <p> <b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p> */}
        <p> <b>{text.length>0?text.trim().split(" ").length:0}</b> words and <b>{text.length}</b> characters</p>
        {/* <p> <b>{(0.008 * text.split(" ").length).toPrecision(2)}</b> Minutes read</p> */}
        <p> <b>{(0.008 * (text.length>0?text.trim().split(" ").length:0)).toPrecision(2)}</b> Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the above Textbox to preview it here."}</p>
    </div>
    </>
  )
}
