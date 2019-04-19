import * as angular from 'angular';

import {greeterComponentOptions} from './greeter.component';

export const greeterModule = angular
    .module('greeter', [])
    .component('greeter', greeterComponentOptions)
    .name;
