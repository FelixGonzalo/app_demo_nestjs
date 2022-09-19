import { Controller, Get } from '@nestjs/common';
import { RandomService } from './random.service';
import { fork } from 'child_process';
import * as path from 'path';

@Controller('api/random')
export class RandomController {
  constructor(private readonly randomService: RandomService) {}

  @Get()
  async getRandoms() {
    return this.randomService.handleGetRandoms();
  }

  @Get('/nobloqueante')
  async getRandomsNoBloqueante() {
    const cant = 100000000;
    const computo = fork(
      path.resolve(__dirname, 'worker_getRandomsNoBloqueante.js'),
    );
    computo.on('message', (numbers) => {
      if (numbers === 'listo') {
        computo.send(cant);
      } else {
        return numbers;
      }
    });
  }
}
