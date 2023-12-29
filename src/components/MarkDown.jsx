import  { setMarkDownContent }  from '../features/markdown/MarkDownSlice';
import ReactMarkdown from 'react-markdown';
import React from 'react'
import { useSelector, useDispatch } from "react-redux";

function MarkDown() {
    const markdownContent = useSelector((state) => state.markDown.content)
    console.log(markdownContent)
    const dispatch = useDispatch()

 
    const handleMarkdownChange = (e) => {
        const content = e.target.value
        dispatch(setMarkDownContent(content))
    }

    return (
        <div>
            <div>
                <textarea id="editor" onChange={handleMarkdownChange} 
                value={markdownContent} 
                placeholder="Type your GitHub-flavored Markdown here (e.g., ## Heading, *italic*, **bold**, etc.)..." >
                </textarea>
            </div>

            <div id="preview">
                <ReactMarkdown children={markdownContent} />
            </div>
        </div>
    )
}

export default MarkDown
