import  { setMarkDownContent }  from '../features/markdown/MarkDownSlice';
import React, { useState } from 'react';
import Maximize from './Maximize.svg'
import Minimize from './Minimize.svg'
import Button from './Button';
import Header from './Header';
import '../styles/Markdown.css';
import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from "react-redux";
function MarkDown() {
    const markdownContent = useSelector((state) => state.markDown.content);
    const [maxMin, setMaxMin] = useState({editor: false, preview:false});
    console.log(markdownContent)
    const dispatch = useDispatch()

   document.title = 'Markdown_previewer'
    const handleMarkdownChange = (e) => {
        const content = e.target.value
        dispatch(
            setMarkDownContent(content)
        )
    }
    console.log(maxMin)

    const handleClickEditor = () => {
        setMaxMin({...maxMin, editor: !maxMin.editor})
      }
    const handleClickPreview = () => {
        setMaxMin({...maxMin, preview: !maxMin.preview})
      }

    return (
        <div>
            <div className='textarea'>
                <Header>
                    <h2>Editor</h2>
                    <Button onClick={handleClickEditor}>
                        {
                            maxMin.editor ?
                            <img src={Minimize} alt="Minimize" />:
                            <img src={Maximize} alt="Maximize" /> 
                        }
                        
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
                    <Button onClick={handleClickPreview}>
                    {
                            maxMin.preview ?
                            <img src={Minimize} alt="Minimize" />:
                             <img src={Maximize} alt="Maximize" /> 
                        } 
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
