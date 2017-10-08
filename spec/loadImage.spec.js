import { expect } from "chai";

import loadImage from "./../lib/components/loadImage";
import ImageMock, { imageCalls } from "./../stubs/Image";

describe("loadImage", () => {
    let originalImage;

    before(() => {
        originalImage = global.Image;
        global.Image = ImageMock;
    });

    after(() => {
        global.Image = originalImage;
    });

    beforeEach(() => {
        imageCalls.length = 0;
    });

    it("returns a promise", () => {
        const image = loadImage("abc");
        expect(image).to.be.a("Promise");
    });

    it("resolves on load success", () => {
        const image = loadImage("abc");
        let resolved = false;
        let rejected = false;
        image.then(
            () => { resolved = true; },
            () => { rejected = true; }
        );

        expect(imageCalls[0].args).to.be.deep.equal([]);
        expect(imageCalls[0].reference.onload).to.be.a("function");

        expect(resolved).to.be.equal(false);
        expect(rejected).to.be.equal(false);

        imageCalls[0].reference.onload();

        return Promise.resolve().then(() => {
            expect(resolved).to.be.equal(true);
            expect(rejected).to.be.equal(false);
        });
    });

    it("rejects on load error", () => {
        const image = loadImage("abc");
        let resolved = false;
        let rejected = false;
        image.then(
            () => { resolved = true; },
            () => { rejected = true; }
        );

        expect(imageCalls[0].args).to.be.deep.equal([]);
        expect(imageCalls[0].reference.onerror).to.be.a("function");

        expect(resolved).to.be.equal(false);
        expect(rejected).to.be.equal(false);

        imageCalls[0].reference.onerror();

        return Promise.resolve().then(() => {
            expect(resolved).to.be.equal(false);
            expect(rejected).to.be.equal(true);
        });
    });
});
