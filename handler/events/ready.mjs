//დისქორდ ბოტის ინიცილაზია
import { ActivityType, Events } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v10";

//ლოგების ინიცილაზია
import { token } from "../../config.js"
import { init_logging } from "../../utils/logging.js"
const Logging = new init_logging()

import { status } from "../../config.js"

//https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files

export const handler = {
  name: Events.ClientReady,
  once: true,
  execute: async (client) => {
    const rest = new REST({ version: "10" }).setToken(token);
    //custom სტატუსი რააა
    client.user.presence.set({
      activities: [{ name: status, type: ActivityType.Custom }],
    });
    Logging.info("Boti Warmatebit Chaitvirta")

    try {
      await rest.put(Routes.applicationCommands(client.user.id), {
        body: client.slashDatas,
      });
    } catch (error) {
      Logging.error(error);
    }
  },
};