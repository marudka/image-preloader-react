const imageCalls = [];

class ImageMock {
    constructor(... args) {
        imageCalls.push({
            args: args,
            reference: this,
        });
    }
}

export default ImageMock;

export {
    imageCalls,
}
