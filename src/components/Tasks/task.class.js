import { LEVELS } from "./levels.enum";

export class Task {
  titulo = "";
  descripcion = "";
  completado = false;
  level = LEVELS.NORMAL;
  constructor(titulo, descripcion, completado, level) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = completado;
    this.level = level;
  }
}
