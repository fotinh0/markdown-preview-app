import './editor.css';
import React from 'react';

export default function Editor(props) {
    return (
        <textarea id="editor" value={props.content} onChange={props.handleTextChange}/>
    )
}