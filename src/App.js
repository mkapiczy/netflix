import React from "react";
import Jumbotron from "./components/jumbotron";
import jumboData from "./fixtures/jumbo";

export default function App() {
    return (
        <>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} item={item} />
            ))}
        </>
    );
}
