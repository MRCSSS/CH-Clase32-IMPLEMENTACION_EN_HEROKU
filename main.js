/* ====================== MODULOS IMPORTADOS ======================== */
import httpServer from './src/server.js';
import { config, logger } from './src/utils/config.js';

/* ============================ SERVIDOR ============================ */
const server = httpServer.listen(config.port, () => {
    logger.info(`Server listening at PORT: ${config.port}`);
});
server.on('error', err => { logger.error(`Server error: ${err}`); });
