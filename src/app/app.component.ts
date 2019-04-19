import './app.component.scss';

export class AppComponent {
    name: string;
    someValueForLifecycleComponent: string;
    showLifecycleComponent: boolean;
}

export const appComponentOptions: ng.IComponentOptions = {
    templateUrl: './app.component.html',
    controller: AppComponent,
};
