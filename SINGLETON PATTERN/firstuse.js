//Before single pattern
// import FancyLogger from './fancyLogger.js';
// const logger = new FancyLogger();

//After singleton pattern
import logger from './fancyLogger.js'

export default function logFirstImplementation()
{
   logger.printLogCount();
   logger.log( 'First file' );
   logger.printLogCount();
}
