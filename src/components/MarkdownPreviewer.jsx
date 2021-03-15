import React from 'react';
import marked from 'marked';
import s from './MarkdownPreviewer.module.scss';


marked.setOptions({
    breaks: true
  });

class MarkdownPreviewer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input: placeholder
        }
        this.onInputChange = this.onInputChange.bind(this);

    }
    onInputChange(e){
        this.setState({
            input: e.target.value
        })
    }
    
    render(){
        return(
            <div className={s.previewerWrapper}>
                    <div className={s.title}>Editor</div>
                    <div className={s.title}>Preview</div> 
                    <textarea className={s.editor} id="editor"  onChange={this.onInputChange.bind(this)}>{this.state.input}</textarea>
                    <div className={s.preview} id="preview" dangerouslySetInnerHTML={{__html:marked(this.state.input)}}></div>
                             
                
             
            </div>
        )
    }

}


const placeholder = `# Hello! it is a Project for FreeCodeCamp React certification!

## It is using marked library
### Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML

How we can use it:


1.this is code:  \`<div></div>\`, between 2 backticks.

2.multi-line code:
\`\`\`
const helloWorld = () =>{
    console.log("Hello World!);
};
\`\`\`

3.**bold** text

4._italic_ one

5.**_we can mix them_**

6.~~strikethrough text~~

7.[links](https://www.freecodecamp.com)

8.Even 
> Block Quotes

9.Table

Header | One more Header | again Header
------ | ----------------| -------------
Text | Text | Text
Text | Text | Text

10.Bulleted list:
- Here.
  - Are.
    - Different.
        - Levels.

11.Numbered lists:

1. Numbererd
1. List
1. !!!

12.and meet **Image**

![Logo](https://i.pinimg.com/736x/5a/1b/1e/5a1b1e32639c6210416804dc7a93ef8e.jpg)
`;

export default MarkdownPreviewer;