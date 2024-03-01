import {ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState} from "react";
import {TerminalProps, TerminalCommands} from "./types"; // Assuming you have a types file where `TerminalCommands` is defined

export const Terminal = forwardRef(
  (props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = '>',

      commands = {},
    } = props;

    const inputRef = useRef<HTMLInputElement>();
    const [input, setInputValue] = useState<string>('');

    /**
     * Focus on the input whenever we render the terminal or click in the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, []);


    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      []
    );

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          const commandToExecute = commands?.[input.toLowerCase()];
          if (commandToExecute) {
            commandToExecute?.();
          } else {
            handleCommandNotFound(); // Call function for handling command not found without arguments
          }
          setInputValue('');
        }
      },
      [commands, input]
    );
    
    // Function to handle command not found
    const handleCommandNotFound = () => {
      const commandNotFoundFunc = commands['__notFound__'];
      if (commandNotFoundFunc) {
        commandNotFoundFunc();
      }
    };
    
    return (
      <div className="terminal" ref={ref} onClick={focusInput}>
        {history.map((line, index) => (
          <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
            {line}
          </div>
        ))}
        <div className="terminal__prompt">
          <div className="terminal__prompt__label">{promptLabel}</div>
          <div className="terminal__prompt__input">
            <input
              type="text"
              value={input}
              onKeyDown={handleInputKeyDown}
              onChange={handleInputChange}
              ref={inputRef}
            />
          </div>
        </div>
      </div>
    );
  }
);
