import {IComponentOptions} from 'angular';

export class GreeterComponent {
    name: string;
}

export const greeterComponentOptions: IComponentOptions = {
    templateUrl: './greeter.component.html',
    controller: GreeterComponent,
    bindings: {
        name: '<'
    }
};
