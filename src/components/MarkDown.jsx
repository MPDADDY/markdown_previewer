import  { setMarkDownContent }  from '../features/markdown/MarkDownSlice';
import Maximize from './Maximize.svg'
import Minimize from './Minimize.svg'
import Button from './Button';
import Header from './Header';
import '../styles/Markdown.css'
import ReactMarkdown from 'react-markdown';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
function MarkDown() {
    const markdownContent = useSelector((state) => state.markDown.content)
    console.log(markdownContent)
    const dispatch = useDispatch()

   document.title = 'Markdown_previewer'
    const handleMarkdownChange = (e) => {
        const content = e.target.value
        dispatch(
            setMarkDownContent(content)
        )
    }

    return (
        <div>
            <div className='textarea'>
                <Header>
                    <h2>Editor</h2>
                    <Button>
                       <img src={Maximize} alt="Maximize" /> 
                    </Button>
                </Header>
                <textarea className='editor' id="editor" onChange={handleMarkdownChange} 
                value={markdownContent} 
                placeholder="Type your GitHub-flavored Markdown here (e.g., ## Heading, *italic*, **bold**, etc.)..." >
                </textarea>
            </div>

            <div className='preview_container'>
                <Header>
                    <h2>Preview</h2>
                    <Button>
                        <img src={Maximize} alt="Maximize" /> 
                    </Button>
                </Header> 
                <div id="preview">
                    <ReactMarkdown children={markdownContent} />
                </div>
            </div>
        </div>  
    )
}

export default MarkDown
