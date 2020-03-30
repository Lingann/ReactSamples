import React from 'react';
import { create } from "react-test-renderer";

const Button = () => {
    return <button> Nothoing to do for now </button>
}

describe("Button component", ()=> {
    test("Match the snapshoot", () => {
        const  button = create(<Button />);
        expect(button.toJSON()).toMatchSnapshot();
    })
})
