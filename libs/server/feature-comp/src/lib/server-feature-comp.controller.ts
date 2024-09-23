import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServerFeatureCompService } from './server-feature-comp.service';
import { ICompetitor } from '@libs/shared/domain_data';
import { CreateCompetitorDto } from './dtos/comp.dto';

@Controller({ path: 'competitors' })
export class ServerFeatureCompController {
  constructor(private serverFeatureCompService: ServerFeatureCompService) {}

  @Get('')
  getAll(): ICompetitor[] {
    return this.serverFeatureCompService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number): ICompetitor {
    return this.serverFeatureCompService.getOne(id);
  }

  @Post('')
  create(@Body() data: CreateCompetitorDto): ICompetitor {
    return this.serverFeatureCompService.create(data);
  }
}
