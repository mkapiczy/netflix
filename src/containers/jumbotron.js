import React from "react";
import jumboData from "../fixtures/jumbo";
import { Jumbotron } from "../components";

export default function JumbotronContainer({ ...restProps }) {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} item={item} {...restProps} />
            ))}
        </Jumbotron.Container>
    );
}
