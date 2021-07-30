import React from "react";
import {Faq} from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
    return (
        <Faq data={faqsData}/>
    );
}
