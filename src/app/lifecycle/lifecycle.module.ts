import * as angular from 'angular';

import {lifecycleComponentOptions} from './lifecycle.component';

export const lifecycleModule = angular
    .module('lifecycle', [])
    .component('lifecycle', lifecycleComponentOptions)
    .name;
