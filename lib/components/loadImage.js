const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => { resolve(); };
        img.onerror = () => { reject(); };
        img.src = src;
    });
};

export default loadImage;
