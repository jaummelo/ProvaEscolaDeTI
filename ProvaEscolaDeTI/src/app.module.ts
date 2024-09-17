import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CursosModule } from './cursos/cursos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [MongooseModule.forRoot('mongodb://0.0.0.0/cursos-nest-ads'), CursosModule, AuthModule, UsersModule],
  controllers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cursos', method: RequestMethod.GET });
  }
}
