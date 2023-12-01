//ლოგების ინიცილაზია
import { init_logging } from "./utils/logging.js"
const Logging = new init_logging()

//დისქორდ ბოტის ინიცილაზია
import { token } from "./config.js"
import { Client, Collection, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages] });
import { readdirSync } from "fs";
client.slashCommands = new Collection();
client.slashDatas = [];

//ვტვირთავთ ბრძანებებს რომელოიც მოთავსებულია cmds ფოლდერში
readdirSync(`./cmds`).forEach(async (file) => {
    let x = Date.now()
  const command = (await import(`./cmds/${file}`)).command;
  Logging.info(`Itvirteba Brdzaneba ${command.data.name}`)
  client.slashDatas.push(command.data.toJSON());
  client.slashCommands.set(command.data.name, command);
  let y = Date.now()
  Logging.info(`${command.data.name} Chaitvirta 0.${y-x} Miliwamshi`) // ვიცი რო მილიწამი ცუდადა გაკეთებული
});

//ვტვირთავთ ევენთებს რომ შემდგომ ჩავთვირთოთ ბრძანებები და სლეშ ქომანდები
readdirSync("./handler/events").forEach(async (file) => {
    const event = (await import(`./handler/events/${file}`)).handler;
    Logging.info(`Itvirteba Eventi ${event.name}`)
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
});

//error handler
process.on("unhandledRejection", (e) => {
    Logging.error(e);
});

process.on("uncaughtException", (e) => {
    Logging.error(e);
});

process.on("uncaughtExceptionMonitor", (e) => {
    Logging.error(e);
});

client.login(token)