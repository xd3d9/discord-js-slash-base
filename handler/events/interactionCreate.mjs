import { Events, InteractionType } from "discord.js";

export const handler = {
 name: Events.InteractionCreate, //https://discordjs.guide/message-components/interactions.html#the-client-interactioncreate-event

 execute: async(interaction) => {
    let client = interaction.client;
    if (interaction.type == InteractionType.ApplicationCommand) {
      if (interaction.user.bot) return;
      try {
        //ვუშვებით ბრძანებებს ინიცილაზიას
        const command = client.slashCommands.get(interaction.commandName)
        //console.log(interaction.commandName)
        command.run(client, interaction)
      } catch (error) {
        console.error(error)
        interaction.reply({content: "Warmoishva Errori, Gtxovt Sheatkobinot Es Movlena Zeros", ephemeral: true})
      }
    }
  }
}