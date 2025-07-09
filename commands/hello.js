const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with a greeting!'),
  async execute(interaction) {
    await interaction.reply('👋 Hello from your slash command!');
  },
};