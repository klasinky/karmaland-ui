import React, { useState } from "react";
import getData from "../axios";

const Channels = () => {
    const [channels, setChannels] = useState(getData());
    console.log(channels);
    return <div>
        <h1>Channels</h1>
    </div>;
};

export default Channels;
