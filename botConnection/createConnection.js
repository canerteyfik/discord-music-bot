const { Client, Intents } = require('discord.js');
const {joinVoiceChannel}=require('@discordjs/voice');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

exports.createConnection=function createConnection(msg){
    if (!msg.member.voice.channel){
        msg.reply('Lütfen bir ses kanalına giriniz.');
        return;
    }
    if (msg.member.voice.channel) {
        const currentChannel = msg.member.voice.channel;
        const connection = joinVoiceChannel({
            channelId: currentChannel.id,
            guildId: currentChannel.guild.id,
            adapterCreator: currentChannel.guild.voiceAdapterCreator,
        });
        return connection;
    }
    return undefined;
}