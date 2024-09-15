import { ICompetitor } from "@comp_lib/shared/domain";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCompetitorDto implements Pick<ICompetitor, 'first_name' | 'last_name' | 'age' | 'gender'> {
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