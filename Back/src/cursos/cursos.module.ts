import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Curso, CursoSchema } from './schemas/curso.schema';
import { AppGateway } from 'src/app/app.gateway';

@Module({
  imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }])],
  controllers: [CursosController],
  providers: [CursosService, AppGateway],
})
export class CursosModule { }
