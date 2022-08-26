const Channel = ({ channel }) => {

    const { user_name, viewer_count } = channel

    const getImage = (user_name) => `${process.env.PUBLIC_URL}/images/${user_name}.png`

    return (
        <>
            <a href="" className='drop-tile is-live'>
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
                                {/* <span className="streamer-captain-type red">{viewer_count}</span> */}
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
