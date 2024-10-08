/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Curso } from './schemas/curso.schema';
import { Model } from 'mongoose';
import { AppGateway } from 'src/app/app.gateway';
export declare class CursosService {
    private cursoModel;
    private appGateway;
    constructor(cursoModel: Model<Curso>, appGateway: AppGateway);
    create(createCursoDto: CreateCursoDto): Promise<Curso>;
    findAll(): Promise<Curso[]>;
    findById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Curso> & Curso & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, Curso> & Curso & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Curso, "findOne", {}>;
    update(id: string, updateCursoDto: UpdateCursoDto): Promise<UpdateCursoDto>;
    remove(id: string): string;
}
