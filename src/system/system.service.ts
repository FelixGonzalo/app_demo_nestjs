import { Injectable } from '@nestjs/common';
import * as os from 'os';

@Injectable()
export class SystemService {
  getSystemInformation() {
    return {
      'Argumentos de entrada': process.argv.slice(2),
      'Nombre de la plataforma (sistema operativo)': process.platform,
      'Versión de node.js': process.version,
      'Memoria total reservada (rss)': process.memoryUsage().rss,
      'Path de ejecución': process.argv.slice(0),
      'Proccess id': process.pid,
      'Carpeta del proyecto': process.cwd(),
      'Número de procesadores': os?.cpus().length,
    };
  }
}
