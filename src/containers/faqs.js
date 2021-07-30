import React from "react";
import {Accordion, OptForm} from "../components";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
    return (
        <>
            <Accordion data={faqsData}>
                <OptForm>
                    <OptForm.Input placeholder="email address"/>
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break/>
                    <OptForm.Text>Ready to watch? Enter your email to create or restart your membership!</OptForm.Text>
                </OptForm>
            </Accordion>

        </>
    );
}
