import React, { useEffect, useMemo, useState } from "react";
import { Terminal } from "./Terminal";
import { useTerminal } from "./Terminal/hooks";

function MainTerminal() {
  const Emoji = "\u{1F430} Keploy"; // 🐰

  // State to manage multiple terminal sessions
  const [tabs, setTabs] = useState([{id:1,title:"Tab 1"}]);
  const [nextTabId, setNextTabId] = useState(2);
  const [activeTab, setActiveTab] = useState(1);

  const addNewTerminal = () => {
    const newTabId = nextTabId;
    setNextTabId(nextTabId + 1);
    if(newTabId>3){
      return;
    }
    const newTabTitle = `Tab ${newTabId}`;
    setTabs([...tabs, { id: newTabId, title: newTabTitle }]);
    setActiveTab(newTabId);
  };

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="flex bg-monokai">
      <div className="cursor-pointer bg-slate-700 hover:bg-slate-800 border-none text-white text-center no-underline inline-block text-base mb-2 px-4 py-2 rounded-full mt-2" onClick={addNewTerminal}>
            +
          </div>
       
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer px-4 py-2 m-2 rounded-lg ${
              activeTab === tab.id
                ? "bg-green-900 text-white"
                : "bg-slate-200 text-gray-800"
            }`}
            onClick={() => switchTab(tab.id)}
          >
            {tab.title}
          </div>
        ))}
       
      </div>
      {tabs.map((tab) => (
        <TerminalSession
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
        />
      ))}
    </div>
  );
}

function TerminalSession({ tab, isActive }) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } =
    useTerminal();

  const Emoji = "\u{1F430} Keploy"; // 🐰

  useEffect(() => {
    resetTerminal();

    pushToHistory(
      <>
        <div>
          <strong>Welcome!</strong> to {tab.title}.
        </div>
        <div style={{ fontSize: 20 }}>
          It contains{" "}
          <span style={{ color: "yellow" }}>
            <strong>Keploy</strong>
          </span>
          . Awesome, right?
        </div>
        <br />
        <div>You can write commands here to interact with {tab.title}.</div>
      </>
    );
  }, []);

  const commands = useMemo(
    () => ({
      start: async () => {
        await pushToHistory(
          <>
            <div>
              <strong>{Emoji}:Starting</strong> the server...{" "}
              <span style={{ color: "green" }}>Done</span>
            </div>
          </>
        );
      },
      alert: async () => {
        alert("Hello!");
        await pushToHistory(
          <>
            <div>
              {Emoji}:<strong>Alert</strong>
              <span style={{ color: "orange", marginLeft: 10 }}>
                <strong> Shown in the browser</strong>
              </span>
            </div>
          </>
        );
      },
      __notFound__: async () => {
        await pushToHistory(
          <>
            <div style={{ color: "red" }}>{Emoji}: Command not found</div>
          </>
        );
      },
      "": async () => {
        await pushToHistory(
          <>
            <div>{Emoji}:</div>
          </>
        );
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    [pushToHistory]
  );

  return isActive ? (
    <Terminal
      history={history}
      ref={setTerminalRef}
      promptLabel={<>{Emoji}:</>}
      commands={commands}
    />
  ) : null;
}

export default MainTerminal;
