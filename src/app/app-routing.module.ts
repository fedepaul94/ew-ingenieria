import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },

  {
    path: 'nosotros',
    loadChildren: () =>
      import('./nosotros/nosotros.module').then((m) => m.NosotrosModule),
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./servicios/servicios.module').then((m) => m.ServiciosModule),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./contacto/contacto.module').then((m) => m.ContactoModule),
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
