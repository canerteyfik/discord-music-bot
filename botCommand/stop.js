
exports.stop= function stop(isConnected,msg,linkList){
    const currentChannel = msg.member.voice.channel;
    if(!isConnected){
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (!(currentChannel.id === connection.joinConfig.channelId)) {
        msg.reply('Bot ile aynı kanalda değilsiniz');
        return;
    }
    isPlayingAudio=false;
    player.stop();
    linkList.splice(0, linkList.length);
    return;
}