import { IsDate, IsNumber, IsString, Max, MaxLength, Min, MinLength } from 'class-validator'

export class CreateCursoDto {
    @IsString()
    @MinLength(3)
    @MaxLength(40)
    nome: string;

    @IsDate()
    dataInicio: Date;
    
    cargaHoraria: number;

    disciplina: string;
    

}
