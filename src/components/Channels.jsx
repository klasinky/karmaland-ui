import React, { useState, useEffect } from "react";
import { getData } from "../services";
import Channel from "./Channel";

const Channels = ({ streamers, logo, description }) => {
    const [channels, setChannels] = useState([]);

    // Get channels from API
    useEffect(() => {
        const getChannels = async () => {
            // const data = await getData(streamers);
            // setChannels(data);
        };
        getChannels();
    }, []);

    return (
        <section className="section streamer-drops campaign campaign-0">
            <div className="container">
                <div className="section-header">
                    <div className="header-body">
                        <img
                            className="img-fluid karmaland-logo"
                            src={`${process.env.PUBLIC_URL}/images/${logo}`}
                            alt={`${description} logo`}
                        />
                        <p>
                            Canales en directo transmitiendo { description } en todas
                            las plataformas.
                        </p>
                    </div>
                </div>

                <div className="drops-group streamer-specific">
                    {channels &&
                        channels.map((channel) => (
                            <Channel
                                key={channel.user_name}
                                channel={channel}
                            />
                        ))}
                    {/* if channels is empty */}
                    {!channels.length && <div className="text-center">
                        <h3>En estos momentos ningún streamer de { description } está en directo 😔</h3>
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default Channels;
