import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.set('view engine','ejs');//renderizar en el main
  await app.listen(3000);
}
bootstrap();
