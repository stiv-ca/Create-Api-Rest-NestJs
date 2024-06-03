import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,  // Asegúrese de que coincide con el puerto expuesto en Docker o su configuración local
      username: 'user_crud',
      password: 'root',
      database: 'db_crud',
      autoLoadEntities: true,
      synchronize: true  // No usar en producción, puede perder datos
    }),
    CatsModule,
    BreedsModule,
  ],
})
export class AppModule {}
