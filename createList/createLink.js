const ytdl = require('ytdl-core');
const { apiKey, baseApiUrl } = require('../config/config.json');
const axios = require('axios');
const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

exports.createLink = async function createLink(msg) {
    let arrayForMsg = msg.content.split(" ");
    let sumArray = arrayForMsg.reduce((pre, cur) => {
        if (pre === '!play') {
            return `${cur}`;
        }
        return `${pre} ${cur}`;
    });
    if (!ytdl.validateURL(sumArray)) {
        let videoUrl = await findVideoUrl(sumArray);
        if (videoUrl !== 'https://www.youtube.com/watch?v=') {
            return videoUrl;
        }
        msg.reply("Geçerli bir youtube linki giriniz.");
        return undefined;
    }
    return sumArray;
}

async function findVideoUrl(tmp) {
    try {
        let requestUrl = `${baseApiUrl}/search?key=${apiKey}&type=video&part=snippet&q=${tmp}`;
        requestUrl = encodeURI(requestUrl);
        let response = await axios.get(requestUrl);
        let videoId = '';
        if (response) {
            videoId = response.data.items[0].id.videoId;
        }
        let baseVideoUrl = "https://www.youtube.com/watch?v=";
        return baseVideoUrl + videoId;
    } catch (error) {
        console.log(error);
    }
    return baseVideoUrl + videoId;
}