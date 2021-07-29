import React from "react";
import JumbotronContainer from "./containers/jumbotron";
import { Footer } from "./components";
import { FaqsContainer } from "./containers/faqs";

export default function App() {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <Footer />
        </>
    );
}
