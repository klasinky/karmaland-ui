function getUrlChannel(userName, platform) {
    const urls = {
        youtube: `https://www.youtube.com/channel/${userName}/live`,
        twitch: `https://www.twitch.tv/${userName}`
    };

    return urls[platform];
}

export { getUrlChannel };