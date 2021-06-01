//Way of creating single object that is shared across  different resources without having to recreate the object again ! Big global variable

import logFirstImplementation from './firstuse.js';
import logSecondImplementation from './seconduse.js';

logFirstImplementation();
logSecondImplementation();
