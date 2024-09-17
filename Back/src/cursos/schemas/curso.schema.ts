import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CursoDocument = HydratedDocument<Curso>;

@Schema({ timestamps: true })
export class Curso {
    @Prop()
    name: string;

    dataInicio: Date;

    cargaHoraria: number;

    disciplina: string;
}

export const CursoSchema = SchemaFactory.createForClass(Curso);