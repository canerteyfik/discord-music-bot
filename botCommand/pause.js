
exports.pause=function pause(isConnected,msg){
    const currentChannel = msg.member.voice.channel;
    if(!isConnected){
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (!(currentChannel.id === connection.joinConfig.channelId)) {
        msg.reply('Bot ile aynı kanalda değilsiniz');
        return;
    }
    player.pause();
    return;
}