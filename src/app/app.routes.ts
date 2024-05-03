import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        async loadComponent() {
            const m = await import('./features/cv/cv.component');
            return m.CvComponent;
        },
    },
];
