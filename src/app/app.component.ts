import './app.component.scss';

export class AppComponent {
    name: string;
}

export const appComponentOptions: ng.IComponentOptions = {
    templateUrl: './app.component.html',
    controller: AppComponent,
};
