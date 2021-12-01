import React from "react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Games from "./components/games";


function App () {
    function getPage () {
        const route = window.location.pathname;
        if (route === "/games") return <Games />;
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
