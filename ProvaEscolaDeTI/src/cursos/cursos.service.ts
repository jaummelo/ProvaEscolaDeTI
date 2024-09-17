import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './schemas/curso.schema';
import { Model } from 'mongoose';
import { AppGateway } from 'src/app/app.gateway';

@Injectable()
export class CursosService {
  constructor(
    @InjectModel(Curso.name) private cursoModel: Model<Curso>,
    private appGateway: AppGateway
) { }

  async create(createCursoDto: CreateCursoDto): Promise<Curso> {
    const createdCurso = new this.cursoModel(createCursoDto);
    return createdCurso.save();
  }

  async findAll(): Promise<Curso[]> {
    return this.cursoModel.find();
  }

  findById(id: string) {
    return this.cursoModel.findById(id)
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    const updatedCurso = await this.cursoModel.findByIdAndUpdate(id, updateCursoDto, {
      new: true
    })

    this.appGateway.notifyCursoUpdate(id, updatedCurso)

    return updateCursoDto
  }

  remove(id: string) {
    return `This action removes a #${id} curso`;
  }
}
