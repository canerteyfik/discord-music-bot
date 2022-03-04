const {token, prefix} = require('../config/config.json')
const {Client, Intents} = require('discord.js');
const {createAudioPlayer, NoSubscriberBehavior, createAudioResource} = require('@discordjs/voice');
const {AudioPlayerStatus, VoiceConnectionStatus} = require("@discordjs/voice");
const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
    ]
});

client.once('ready', () => {
    console.log(`logged in ${client.user.tag}`);
});

const {createConnection} = require('../botConnection/createConnection');
const {createPlayer} = require('../botConnection/createPlayer');
const {pause} = require('../botCommand/pause.js');
const {resume} = require('../botCommand/resume.js');
const {stop} = require('../botCommand/stop.js');
const {skip} = require('../botCommand/skip.js');
const {kick} = require('../botCommand/kick.js');
const {play} = require('../botCommand/play');
const {executeNext} = require("../executeStream/executeNext");
global.client = client;
global.player = createPlayer();
const linkList = [];
let isConnected = false;
global.isPlayingAudio=false;
let msgOut;
client.on('messageCreate', async msg => {
    //yazar botsa dön
    if (msg.author.bot) return;
    //mesaj prefix ile başlamıyor ise dön
    msgOut=msg;
    msg.content = msg.content.trim();
    if (!msg.content.startsWith(prefix)) return;
    if (msg.content.startsWith(`${prefix}play`)) {
        //bağlantı sağlandı
        const connection = createConnection(msg);
        global.connection = connection;
        isConnected = true;
        await play(isConnected, msg, linkList);
    }
    if (isConnected) {
        if (msg.content === `${prefix}pause`) {
            pause(isConnected, msg,);
        } else if (msg.content === `${prefix}resume`) {
            resume(isConnected, msg,);
        } else if (msg.content === `${prefix}stop`) {
            stop(isConnected, msg, linkList);
        } else if (msg.content === `${prefix}skip`) {
            skip(isConnected, msg, linkList);
        } else if (msg.content === `${prefix}kick`) {
            isconnected = kick(isConnected, msg, linkList);
        }
    }
});
/*player.addListener("stateChange", async (oldOne, newOne) => {
    if (newOne.status === "idle") {
        if(linkList===0){
            isPlayingAudio=false;
        }
        await executeNext(linkList,msgOut);
    }
});*/
player.on(AudioPlayerStatus.Idle , async ()=>{

    console.log(linkList.length);
    if(linkList.length===0){
        console.log('girdi');
        isPlayingAudio=false;
        return;
    }
    await executeNext(linkList,msgOut);
});
client.login(token);