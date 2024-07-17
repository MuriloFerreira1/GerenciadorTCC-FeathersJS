import { Application } from '../declarations';
import usuarios from './usuarios/usuarios.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(usuarios);
}
