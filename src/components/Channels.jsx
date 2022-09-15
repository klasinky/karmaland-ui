import React, { useState, useEffect } from "react";
import { getData } from "../services";
import Channel from "./Channel";
import ChannelSkeleton from "./ChannelSkeleton";

const Channels = ({ streamers, logo, description }) => {
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);
    // Array for showing the loading animation
    const loadingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Get channels from API
    useEffect(() => {
        const getChannels = async () => {
            const data = await getData(streamers);
            setChannels(data);
            setLoading(false);
        };
        getChannels();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                            Canales en directo transmitiendo {description} en
                            todas las plataformas.
                        </p>
                    </div>
                </div>
                {!loading ? (
                    <div className="drops-group streamer-specific">
                        {channels &&
                            channels.map((channel) => (
                                <Channel
                                    key={channel.user_name}
                                    channel={channel}
                                />
                            ))}
                        {/* if channels is empty */}
                        {!channels.length && (
                            <div className="text-center">
                                <h3>
                                    En estos momentos ningún streamer de{" "}
                                    {description} está en directo 😔
                                </h3>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="drops-group streamer-specific">
                        {loadingArray.map((item) => (
                            <ChannelSkeleton key={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Channels;
