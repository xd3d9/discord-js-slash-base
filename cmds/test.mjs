import { SlashCommandBuilder } from "@discordjs/builders";

// მეტი ინფორმაციისთვის ეწვიეთ https://www.npmjs.com/package/@discordjs/builders
export const command = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("test"),
    run: async (client, interaction) => {
      interaction.reply(`test`)
    }
 };