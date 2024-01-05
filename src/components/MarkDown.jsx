import  { setMarkDownContent }  from '../features/markdown/MarkDownSlice';
import React, { useEffect, useState } from 'react';
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
    const [fullScreen, setfulSCreen] = useState({editor:'editor', preview: 'preview_container' , hideTextarea: 'textarea'})
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

useEffect(() => {
    setfulSCreen((prevFullScreen) => ({
      ...prevFullScreen,
      editor: maxMin.editor ? 'editorFull' : maxMin.preview ? 'none' : 'editor',
      preview: !maxMin.editor ? 'preview_container': !maxMin.preview? 'none': 'none',
      hideTextarea: maxMin.preview ? 'none' : 'textarea'
    }));
  }, [maxMin.editor, maxMin.preview]);
  

    return (
        <div>
            <div className={fullScreen.hideTextarea}>
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
                <textarea className= {fullScreen.editor} id="editor" onChange={handleMarkdownChange} 
                value={markdownContent} 
                placeholder="Type your GitHub-flavored Markdown here (e.g., ## Heading, *italic*, **bold**, etc.)..." >
                </textarea>
            </div>

            <div className={fullScreen.preview}>
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
                <div className='preview' id="preview">
                    <ReactMarkdown children={markdownContent} />
                </div>
            </div>
        </div>  
    )
}

export default MarkDown
