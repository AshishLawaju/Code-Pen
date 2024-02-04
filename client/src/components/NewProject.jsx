import SplitPane from "react-split-pane";
import "./NewProject.css";
import { BsSlashLg } from "react-icons/bs";
import { FaAngleDown, FaGear } from "react-icons/fa6";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";
import { BiCodeCurly } from "react-icons/bi";
import { FaAsterisk } from "react-icons/fa";
import { LuAsterisk } from "react-icons/lu";

import "../HideScroll.css";
export default function NewProject() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    updateOutput();
  }, [html, css, js]);

  function updateOutput() {
    const combinedOutput = `
  <html>
  <head>
  <style>${css} </style>
  </head>
  <body>
  ${html}
  <script>${js} </script>
  </body>


  </html>
  `;

    setOutput(combinedOutput);
  }
  return (
    <>
      <div className="">
        {/* horizontal     */}

        <SplitPane
          split="horizontal"
          minSize={100}
          maxSize={-100}
          defaultSize={"45%"}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          {/*  top coding section */}

          <SplitPane
            split="vertical"
            defaultSize={"33%"}
            className="overflow-hidden "
          >
            {/* html */}
            <div className="flex h-full w-full flex-col items-start justify-start">
              <div className="flex w-full items-center justify-between bg-black">
                <div className="flex items-center gap-2 border-t-4 border-t-gray-500 bg-secondary px-4 py-2">
                  <div className="flex items-center justify-center rounded-md bg-red-500 p-[2px]">
                    <BsSlashLg />
                  </div>
                  <p className="font-bold text-slate-300">HTML</p>
                </div>
                <div className="flex cursor-pointer items-center gap-1 px-4">
                  <div className="bg-slate-700 py-[2px] px-2 rounded">
                    <FaGear className=" text-[10px] text-white" />
                  </div>
                  <div className="bg-slate-700 py-[2px] px-2 rounded">
                    <FaAngleDown className=" text-[10px] text-white" />
                  </div>
                </div>
              </div>
              <div className="w-full  overflow-hidden ">
                <CodeMirror
                  value={html}
                  height="600px"
                  theme="dark"
                  className=" "
                  extensions={[javascript({ jsx: true })]}
                  onChange={(value, viewUpdate) => {
                    setHtml(value);
                  }}
                />
                ;
              </div>
            </div>
            <SplitPane split="vertical" defaultSize={"50%"}>
              {/* css */}
              <div className="flex h-full w-full flex-col items-start justify-start">
                <div className="flex w-full items-center justify-between bg-black">
                  <div className="flex items-center gap-2 border-t-4 border-t-gray-500 bg-secondary px-4 py-2">
                    <div className="flex items-center justify-center rounded-md bg-[#0EBEFF] p-[2px]">
                      <LuAsterisk />
                    </div>
                    <p className="font-bold text-slate-300">CSS</p>
                  </div>
                  <div className="flex cursor-pointer gap-1 px-4">
                    <FaGear className="text-xl text-slate-400" />
                    <FaAngleDown className="text-xl text-slate-400" />
                  </div>
                </div>
                <div className="w-full overflow-hidden ">
                  <CodeMirror
                    value={css}
                    height="600px"
                    theme="dark"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setCss(value);
                    }}
                  />
                  ;
                </div>
              </div>
              {/* JS */}
              <div className="flex h-full w-full flex-col items-start justify-start">
                <div className="flex w-full items-center justify-between bg-black">
                  <div className="flex items-center gap-2 border-t-4 border-t-gray-500 bg-secondary px-4 py-2">
                    <div className="flex items-center justify-center rounded-md bg-[#FCD000] p-[2px]">
                      <BiCodeCurly />
                    </div>
                    <p className="font-bold text-slate-300">JS</p>
                  </div>
                  <div className="flex cursor-pointer gap-2 px-4">
                    <FaGear className="text-xl text-slate-400" />
                    <FaAngleDown className="text-xl text-slate-400" />
                  </div>
                </div>
                <div className="w-full overflow-hidden ">
                  <CodeMirror
                    value={js}
                    height="600px"
                    theme="dark"
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      setJs(value);
                    }}
                  />
                  ;
                </div>
              </div>
            </SplitPane>
          </SplitPane>

          {/*   bottom result section */}

          <div className="h-[100%] w-full overflow-hidden bg-white">
            <iframe
              title="Result"
              srcDoc={output}
              className="h-full w-full border-none"
            />
          </div>
        </SplitPane>
      </div>
    </>
  );
}
