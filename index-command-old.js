require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
  if (message.content === '!hello naheed') {
    message.reply('👋 Hello bots, created by raza n neheed!');
  }
  if (message.content === '!hello') {
    message.reply('👋 Hello from your bot!');
  }

  if (message.content === '!bye') {
    message.reply('👋 Goodbye!');
  }

  if (message.content === '!help') {
    message.reply('Here are my commands:\n- !hello\n- !bye\n- !help');
  }
  if (message.content.startsWith('!echo ')) {
    const replyText = message.content.slice(6); // remove "!echo "
    message.reply(replyText);
  }
});

client.login(process.env.DISCORD_TOKEN);
