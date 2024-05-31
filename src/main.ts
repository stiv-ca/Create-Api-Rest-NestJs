import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api/v1');  // Opcional, para prefijar la API con 'api/v1'

  app.useGlobalPipes(new ValidationPipe({

    whitelist: true,   // Solo permite propiedades definidas en el DTO
    forbidNonWhitelisted : true, // Si se encuentran propiedades en los datos de entrada que no están definidas en el DTO, la validación fallará y se rechazarán los datos de entrada
    transform: true,   // Transforma los datos de entrada a los tipos esperados

  }));

  await app.listen(3000);
}
bootstrap();
