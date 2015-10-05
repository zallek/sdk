import _ from 'lodash';
import * as botifySDK from 'botify-sdk-js';

import { endsWith } from './utils/common';
import applyMiddleware from './utils/applyMiddleware';
import log from './middlewares/log';


const isController = (value, key) => endsWith(key, 'Controller');
const controllers = _.pick(botifySDK, isController);
const others = _.omit(botifySDK, isController);

export default {
  ...controllers.map(controller => applyMiddleware(
    log
  )(controller)),
  ...others,
};
