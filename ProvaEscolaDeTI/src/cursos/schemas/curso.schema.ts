import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CursoDocument = HydratedDocument<Curso>;

@Schema({ timestamps: true })
export class Curso {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    value: number;

    @Prop()
    data: Date;

    @Prop()
    ISBN: string;
}

export const CursoSchema = SchemaFactory.createForClass(Curso);