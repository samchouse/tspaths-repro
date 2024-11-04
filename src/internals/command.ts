import {
  type ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

type Run = (options: {
  interaction: ChatInputCommandInteraction;
}) => Promise<unknown>;

interface Command {
  run: Run;
  meta: {
    name: string;
    description: string;
  };
}

export function command(
  command: Command,
) {
  const builder = new SlashCommandBuilder()
    .setName(command.meta.name)
    .setDescription(command.meta.description)

  return {
    type: 'command',
    command: command,
    builder,
  };
}
