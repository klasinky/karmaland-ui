import { getUrlChannel } from "../utils";

const Channel = ({ channel }) => {

    const { user_name, platform, title } = channel

    const getImage = (user_name) => `${process.env.PUBLIC_URL}/images/${user_name}.png`
    const urlChannel = getUrlChannel(user_name, platform)
    return (
        <>
            <a href={urlChannel} target="_blank" rel="noreferrer"  className='drop-tile is-live'>
                <div className="drop-header red">
                    <div className="streamer-details">
                        {/* Avatar */}
                        <div className="avatar">
                            <img src={getImage(user_name)} alt={`${user_name} logo`} />
                        </div>

                        {/* Streamer Info */}
                        <div className="streamer-item">
                            {/* Name */}
                            <div className="streamer-name-wrapper">
                                <span className="streamer-name">{user_name}</span>
                                <span className="streamer-title ">{title}</span>
                            </div>

                            {/* Online Status */}
                            <div className="online-status is-live">Live</div>

                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Channel;
