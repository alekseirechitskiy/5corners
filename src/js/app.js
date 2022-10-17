'use strict';

import * as functions from './modules/functions.js';
import headerScripts from './modules/header.js';
import inputNumber from './modules/inputNumber.js';
import map from './modules/map.js';
import select from './modules/select.js';
import toCollectData from './modules/toCollectData.js';

functions.isWebp();
headerScripts();
inputNumber();
map();
select();
toCollectData();