import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServerFeatureCompService } from './server-feature-comp.service';
import { ICompetitor } from '@libs/shared/domain_data';
import { CreateCompetitorDto } from './dtos/comp.dto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller({ path: 'competitors' })
export class ServerFeatureCompController {
  constructor(private serverFeatureCompService: ServerFeatureCompService) {}

  @Get('')
  @ApiOkResponse({
    type: CreateCompetitorDto,
    isArray: true,
  })
  @ApiOperation({
    summary: 'Returns all registered competitors',
    tags: ['competitors'],
  })
  async getAll(): Promise <ICompetitor[]> {
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
