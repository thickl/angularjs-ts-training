import * as angular from 'angular';
import {ClickCounterDirective} from './click-counter.directive';

export const clickCounterModule = angular
    .module('clickCounter', [])
    .directive('clickCounter', () => new ClickCounterDirective())
    .name;
