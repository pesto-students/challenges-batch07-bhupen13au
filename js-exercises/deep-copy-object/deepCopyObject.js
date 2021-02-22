const _ = require('lodash');

const deepCopyObject = objToCopy => _.cloneDeep(objToCopy);

export { deepCopyObject };
