import React from "react";
import {Accordion} from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
    return (
        <Accordion data={faqsData}></Accordion>
    );
}
