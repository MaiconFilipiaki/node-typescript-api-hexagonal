import pino from 'pino';

const LEVEL_LOG = process.env.LEVEL_LOG || 'info';

export const log = pino({
    name: 'node-ts-server',
    level: LEVEL_LOG,
})
