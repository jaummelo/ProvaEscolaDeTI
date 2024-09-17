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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
export declare class CursosController {
    private readonly CursosService;
    constructor(cursosService: CursosService);
    create(createCursoDto: CreateCursoDto): Promise<import("./schemas/curso.schema").Curso>;
    findAll(): Promise<unknown>;
    findById(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/curso.schema").Curso> & import("./schemas/curso.schema").Curso & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/curso.schema").Curso> & import("./schemas/curso.schema").Curso & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/curso.schema").Curso, "findOne", {}>;
    update(id: string, updateCursoDto: UpdateCursoDto): Promise<UpdateCursoDto>;
    remove(id: string): string;
}
