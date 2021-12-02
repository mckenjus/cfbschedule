import React from "react";
import Header from "./components/Header";
import HomePage from "./HomePage";
import Games from "./games";
import Teams from "./Teams"


function App () {
    function getPage () {
        const route = window.location.pathname;
        if (route === "/games") return <Games />;
        if (route === "/teams") return <Teams/>
        return <HomePage />;
    }
    return (
        <div className="container-fluid">
    <Header />
    { getPage() }
    </div>
        )
}

export default App;
