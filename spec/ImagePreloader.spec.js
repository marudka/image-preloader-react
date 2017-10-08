import React from "react";
import { expect } from 'chai';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import ImagePreloader from "./../lib/components/ImagePreloader"

describe("App component", () => {
    it("renders itself", () => {
        const component = shallow(<ImagePreloader />);
        const test = component.find("div");
        expect(test).to.have.length(1);
        expect(test.text()).to.be.equal("s");

        component.unmount();
    });
});