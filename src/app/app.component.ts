import {IComponentOptions, IOnInit} from 'angular';

export class AppComponent implements IOnInit {
    name: string;
    someValueForLifecycleComponent: string;
    showLifecycleComponent: boolean;
    counter: number;

    setCounter(counter: number): void {
        this.counter = counter;
    }

    $onInit(): void {
        this.counter = 0;
    }
}

import './app.component.scss';

export const appComponentOptions: IComponentOptions = {
    templateUrl: './app.component.html',
    controller: AppComponent,
};
