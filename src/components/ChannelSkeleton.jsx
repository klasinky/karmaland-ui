import React from "react";

const ChannelSkeleton = () => {
    return (
            <div
                href="#"
                target="_blank"
                rel="noreferrer"
                className="drop-tile is-live skeleton"
            >
                <div className="drop-header red">
                    <div className="streamer-details">
                        <div className="avatar">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/default-avatar.jpg`}
                                alt=""
                            />
                        </div>

                        {/* Streamer Info */}
                        <div className="streamer-item">
                            {/* Name */}
                            <div className="streamer-name-wrapper">
                                <span className="streamer-name">
                                    Cargando...
                                </span>
                                <span className="streamer-title">

                                </span>
                            </div>

                            {/* Online Status */}
                            <div className="online-status is-live">Live</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ChannelSkeleton;
