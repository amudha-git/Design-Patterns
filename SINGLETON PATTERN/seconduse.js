//Before single pattern
// import FancyLogger from './fancyLogger.js';
// const logger = new FancyLogger();

//After singleton pattern
import logger from './fancyLogger.js'

export default function logSecondImplementation()
{
    logger.printLogCount();
    logger.log( 'Second file' );
    logger.printLogCount();
}
