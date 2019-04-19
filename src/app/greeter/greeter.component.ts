export class GreeterComponent {
    name: string;
}

export const greeterComponentOptions: ng.IComponentOptions = {
    templateUrl: './greeter.component.html',
    controller: GreeterComponent,
    bindings: {
        name: '<'
    }
};
