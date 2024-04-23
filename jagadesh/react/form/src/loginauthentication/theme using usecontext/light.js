import { Fragment, createContext, useContext, useState } from 'react';
import "./theme.css"
const ThemeContext = createContext(null);

export default function AppContext() {
    const [Profile, SetProfile] = useState({
        "Name": "",
        "Theme": ""
    });
    return (
        //  <ThemeContext.Provider value={theme}>
        <Fragment >
            <Form Theme={Profile.Theme} />
            <Button Theme={Profile.Theme} onClick={() => {
                console.log("as")
                SetProfile(prev => {
                    return {
                        ...prev,
                        "Theme": 'light' === prev.Theme ? 'dark' : 'light'
                    }
                });
            }}>
                Switch Theme
            </Button  >
        </Fragment>
        ///   </ThemeContext.Provider>
    );
}

function Form(Props) {
    const { Theme } = Props;
    return (
        <Panel Theme={Theme} title="Welcome">
            <Button Theme={Theme}>Sign up</Button>
            <Button Theme={Theme}>Log in</Button>
        </Panel>
    );
}

function Panel({ title, children, Theme }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + (Theme ?? theme);
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

function Button({ children, onClick, Theme }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + (Theme ?? theme);
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}