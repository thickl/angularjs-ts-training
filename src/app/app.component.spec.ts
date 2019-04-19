import * as angular from 'angular';
import 'angular-mocks';

import {AppComponent, appComponentOptions} from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
        angular
            .module('test', [])
            .component('component', appComponentOptions);
        angular.mock.module('test');
    });

    beforeEach(inject(($componentController) => {
        component = $componentController('component', {}, {});
    }));
});
