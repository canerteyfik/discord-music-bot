const { token, prefix } = require('../config/config.json')
const { createLinkList } = require('../createList/createLinkList');
const { executeList } = require('../executeStream/executeList');
const { AudioPlayerStatus, VoiceConnectionStatus, NoSubscriberBehavior } = require("@discordjs/voice");
exports.play = async function play(isConnected, msg, linkList) {
    if (!isConnected) {
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (connection) {
        if (!isPlayingAudio) {
            await createLinkList(linkList, msg);
            if (linkList.length > 0) {
                await executeList(msg, linkList);
            }
            isPlayingAudio = true;
        } else {
            try {
                await createLinkList(linkList, msg);
            } catch (err) {
                console.log(err);
            }
        }
    }
}

