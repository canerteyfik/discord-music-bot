
exports.resume= function resume(isConnected,msg){
    const currentChannel = msg.member.voice.channel;
    if(!isConnected){
        msg.reply('Geçerli bir ses bağlantısı yok.');
        return;
    }
    if (!(currentChannel.id === connection.joinConfig.channelId)) {
        msg.reply('Bot ile aynı kanalda değilsiniz');
        return;
    }
    if(player.checkPlayable()){
        player.unpause();
    }else{
        msg.reply("Devam ettirilecek bir ses dosyası bulunmuyor.");
        return;
    }
}