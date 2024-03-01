import React, {useEffect, useMemo} from 'react';
import {Terminal} from "./Terminal";
import {useTerminal} from "./Terminal/hooks";

function MainTerminal() {
  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
  } = useTerminal();

  const Emoji = "\u{1F430} Keploy"; // 🐰

  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div><strong>Welcome!</strong> to the terminal.</div>
        <div style={{fontSize: 20}}>It contains <span style={{color: 'yellow'}}><strong>Keploy</strong></span>. Awesome, right?</div>
        <br/>
        <div>You can write: RECORD or TEST , to execute some commands.</div>
      </>
    );
  }, []);

  const commands = useMemo(() => ({
    'start': async () => {
      await pushToHistory(<>
          <div>
            <strong>{Emoji}:Starting</strong> the server... <span style={{color: 'green'}}>Done</span>
          </div>
        </>);
    },
    'alert': async () => {
      alert('Hello!');
      await pushToHistory(<>
          <div>
            {Emoji}:
            <strong>Alert</strong>
            <span style={{color: 'orange', marginLeft: 10}}>
              <strong> Shown in the browser</strong>
            </span>
          </div>
        </>);
    },
    '__notFound__': async () => {
      await pushToHistory(
        <>
         <div style={{ color: 'red' }}>{Emoji}:Command not found</div>
        </>
      );
    },
    'clear':async()=>{
      await resetTerminal();
    }
  }), [pushToHistory]);

  return (
    <div>
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={<>{Emoji}:</>}
        commands={commands}
      />
    </div>
  );
}

export default MainTerminal;
