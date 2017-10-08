import React from "react";

import ImagePreloader from "./../../lib/components/ImagePreloader";

const App = () => {
    const src = "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg";
    return <ImagePreloader src={src} />
};

export default App;
