import './polyfills';
import './vendor';

import './index.scss';

import * as angular from 'angular';

import {appModule} from './app/app.module';

const bootstrapModuleName = angular.module('application.bootstrap', [
    appModule
]).name;
