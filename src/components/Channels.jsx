import React, { useState, useEffect } from "react";
import { getData } from "../services";
import Channel from "./Channel";

const Channels = () => {

    const [channels, setChannels] = useState([]);

    // Get channels from API
    useEffect(() => {
        const getChannels = async () => {
            // const data = await getData()
            const data = [
                {user_name: "alexby11", viewer_count: 1231},
                {user_name: "rubius", viewer_count: 18231},
                {user_name: "mangel", viewer_count: 12361},
                {user_name: "illojuan", viewer_count: 12331},
            ]
            setChannels(data)
        }
        getChannels()
    }, [])




    return (
        <section className="section streamer-drops campaign campaign-0">
            <div className="container">

                <div className="section-header">
                    <div className="header-body">
                        <img className="img-fluid karmaland-logo" src="https://www.pulsovideojuegos.com/wp-content/uploads/2022/07/karmaland-5.png" alt="karmalvnd logo" />
                        <p>Canales en directo transmitiendo karmaland en todas las plataformas.</p>
                    </div>
                </div>

                <div className="drops-group streamer-specific">
                    {channels && channels.map((channel) => <Channel key={channel} channel={channel} />)}
                </div>
            </div>
        </section>
    );
};

export default Channels;
