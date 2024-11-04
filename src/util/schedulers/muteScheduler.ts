import dayjs from 'dayjs';

export const maxMuteDuration = dayjs.duration({ days: 28 });

class MuteScheduler {
  async init() {}
  public async addTask() {}
}

export const muteScheduler = new MuteScheduler();
