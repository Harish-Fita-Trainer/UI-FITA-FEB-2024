import { Fragment, createContext, useContext, useState } from 'react';
import './theme.css';

const ThemeContext = createContext(null);

export default function AppContext() {
    const [profile, setProfile] = useState({
        Name: '',
        Theme: 'light', // Setting default theme to 'light'
    });

    return (
        <ThemeContext.Provider value={profile.Theme}>
            <Fragment>
                <Form />
                <Button onClick={() => {
                    setProfile(prev => ({
                        ...prev,
                        Theme: prev.Theme === 'light' ? 'dark' : 'light',
                    }));
                }}>
                    Switch Theme
                </Button>
            </Fragment>
        </ThemeContext.Provider>
    );
}

function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}

function Panel({ title, children }) {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}

function Button({ children, onClick }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}
