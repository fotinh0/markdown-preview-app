import './preview.css';
import marked from 'marked';

export default function Preview(props) {

    return (
        <div id="preview" 
            dangerouslySetInnerHTML = {{
            __html: marked(props.content, { renderer: props.renderer })
            }}>
        </div>
    )
}