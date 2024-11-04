import { command } from '~/internals/command.js';
import {
  maxMuteDuration,
  muteScheduler,
} from '~/util/schedulers/muteScheduler.js';

export const muteCommand = command({
  meta: {
    name: 'mute',
    description: 'Mute a member',
  },
  run: async ({
    interaction,
  }) => {
    muteScheduler.init()
    return interaction.reply({
      content: `Muted with case ID of ${maxMuteDuration}.`,
    });
  },
});
