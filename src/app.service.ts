import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      author: 'MichaelKing',
      message:
        'Hello World from github-action, ecr and ecs with applicaton load balancer all configured and working fine',
    };
  }
}
