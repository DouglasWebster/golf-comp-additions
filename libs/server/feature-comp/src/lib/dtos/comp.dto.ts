import {
  ICompetitor,
  ICreateCompetitor,
  IUpdateCompetitor,
  IUpsertCompetitor,
} from '@libs/shared/domain_data';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCompetitorDto implements ICreateCompetitor {
  @IsString()
  @IsNotEmpty()
  first_name!: string;

  @IsString()
  @IsNotEmpty()
  last_name!: string;

  @IsString()
  gender!: string;

  @IsNumber()
  age!: number;
}

export class UpsertCompetitorDto implements IUpsertCompetitor {
  @IsNumber()
  id!: number;

  @IsString()
  @IsNotEmpty()
  first_name!: string;

  @IsString()
  @IsNotEmpty()
  last_name!: string;

  @IsString()
  gender!: string;

  @IsNumber()
  age!: number;
}

export class UpdateCompetitorDto implements IUpdateCompetitor {}
