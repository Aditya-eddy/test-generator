import React, { useEffect } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { EditorView } from "@uiw/react-codemirror";
function MainEditor({ lang }) {
  const [value, setValue] = React.useState("console.log('hello world!');");

  useEffect(() => {
    if (lang === "Golang-Test") {
      setValue(`package main
    import "fmt"
    
    func main() {
      fmt.Println("Hello, 世界")
    };`);
    }else if(lang === "Python-Test"){
      setValue(`print("Hello world")`)
    }
  }, [lang]);

  const onChange = (val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  };
  // let myTheme = EditorView.theme({
  //   "&": {
  //     color: "white",
  //     backgroundColor: "#272822"
  //   },
  //   ".cm-content": {
  //     caretColor: "white"
  //   },
  //   "&.cm-focused .cm-cursor": {
  //     borderLeftColor: "orange"
  //   },
  //   "&.cm-focused .cm-selectionBackground, ::selection": {
  //     backgroundColor: "orange"
  //   },
  //   ".cm-gutters": {
  //     backgroundColor: "#272822",
  //     color: "#ddd",
  //     border: "none"
  //   },
  // }, {dark: true})
  return (
    <div>
      <div className="flex gap-1 text-white bg-monokai">
        <button className="bg-slate-400 cursor-pointer px-4 py-2 m-2 rounded-lg hover:bg-slate-800 ">Record</button>
        <button className="bg-slate-400 cursor-pointer px-4 py-2 m-2 rounded-lg hover:bg-slate-800">Test</button>
      </div>
      <CodeMirror
        value={value}
        height="100vh"
        theme={monokai}
        extensions={[javascript({ jsx: true }), StreamLanguage.define(go),]}
        onChange={onChange}
      />
    </div>
  );
}

export default MainEditor;
