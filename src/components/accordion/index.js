import React, {createContext, useContext, useState} from "react";
import {Body, Container, Header, Item, Title} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({data, children, ...restProps}) {
    return (
        <Container {...restProps}>
            <Title>Frequently Asked Questions</Title>
            {data.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            {children}
        </Container>
    );
}

Accordion.Title = function AccordionTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
};

Accordion.Item = function AccordionItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>{children}</Item>
        </ToggleContext.Provider>
    );
};

Accordion.Header = function AccordionHeader({children, ...restProps}) {
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return (
        <Header onClick={() => setToggleShow((toggleShow) => !toggleShow)} {...restProps}>
            {children}
            {toggleShow ? <img src="/images/icons/close-slim.png" alt="Close"/> :
                <img src="/images/icons/add.png" alt="Open"/>}
        </Header>
    );
};

Accordion.Body = function AccordionBody({children, ...restProps}) {
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};
