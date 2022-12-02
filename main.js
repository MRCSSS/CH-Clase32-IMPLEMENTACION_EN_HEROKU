/* ====================== MODULOS IMPORTADOS ======================== */
import httpServer from './src/server.js';
import {logger} from './src/utils/config.js';

/* ============================ SERVIDOR ============================ */
const server = httpServer.listen(args.port, () => {
    logger.info(`Server listening at PORT: ${args.port}`);
});
server.on('error', err => { logger.error(`Server error: ${err}`); });
