import React from "react";
import { Container, Item, Pane, Title, SubTitle, Image } from "./styles/jumbotron";

export default function Jumbotron({ item, ...restProps }) {
    return (
        <Jumbotron.Container>
            <Item direction={item.direction || "row"} {...restProps}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron.Pane>
            </Item>
        </Jumbotron.Container>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />;
};
