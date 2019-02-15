import {Controller, Get, Res} from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }


    @Get('inicio')
    inicio(@Res() response,) {
        response.render('inicio')
    }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
}
