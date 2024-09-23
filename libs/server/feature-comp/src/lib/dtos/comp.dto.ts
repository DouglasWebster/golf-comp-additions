import {
  ICompetitor,
  ICreateCompetitor,
  IUpdateCompetitor,
  IUpsertCompetitor,
} from '@libs/shared/domain_data';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompetitorDto implements ICreateCompetitor {
  @ApiProperty({
    type: String,
    example: `Fred`,
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  first_name!: string;

  @ApiProperty({
    type: String,
    example: `Blogs`,
    required: true,
  })
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
