import React from "react";
import JumbotronContainer from "../containers/jumbotron";
import {FaqsContainer} from "../containers/faqs";
import {Footer} from "../components";

export default function Home() {
    return (
        <>
            <JumbotronContainer/>
            <FaqsContainer/>
            <Footer/>
        </>
    );
};