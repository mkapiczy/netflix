import React from "react";
import {Accordion, OptForm} from "../../components";
import {Container} from "./styles/faq";

export default function Faq({data, ...restProps}) {
    return (
        <Container {...restProps}>
            <Accordion data={data}/>
            <OptForm/>
        </Container>
    );
}
