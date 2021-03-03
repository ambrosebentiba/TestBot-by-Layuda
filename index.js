const Discord = require("discord.js")
const client = new Discord.Client()
require("dotenv").config()

//--------------------- 

client.on("ready", function()
{
    console.log("I'm ready !");
});

const prefix = "!";

client.on("message", function(message)
{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping")
    {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Latence de ${timeTaken}ms.`);
    }

    else if (command === "sum") 
    {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`The sum of all the arguments you provided is ${sum}!`)
    }

    else if (command === "zebi")
    {
        message.reply('zebimax gros');
    }

    else if (command === "noir")
    {
        message.reply('Hummmmm, savoureux !');
    }

    else if (command === 'juif')
    {
        message.reply('Sale PD')
    }

    else if (command === 'terroriste')
    {
        message.reply('La gamelle gros...la gamelle')
    }
});

client.login(process.env.BOT_TOKEN); // ALWAYS AT THE END