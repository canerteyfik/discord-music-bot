const { token, prefix } = require('../config/config.json')
const {joinVoiceChannel}=require('@discordjs/voice');



exports.kick= function kick(isConnected,msg,linkList) {
    const currentChannel = msg.member.voice.channel;
    if(!isConnected){
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (!(currentChannel.id === connection.joinConfig.channelId)) {
        msg.reply('Bot ile aynı kanalda değilsiniz');
        return;
    }
    connection.destroy();
    linkList.splice(0, linkList.length);
    return false;
}