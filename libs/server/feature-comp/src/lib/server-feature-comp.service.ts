import { Injectable, NotFoundException } from '@nestjs/common';
import { ICompetitor } from '@libs/shared/domain_data';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ServerFeatureCompService {
  private comp$$ = new BehaviorSubject<ICompetitor[]>([
    {
      id: 1,
      first_name: 'Albert',
      last_name: 'Newton',
      gender: 'Male',
      age: 50,
    },
  ]);

  getAll(): ICompetitor[] {
    return this.comp$$.value;
  }

  getOne(id: number): ICompetitor {
    const competitior = this.comp$$.value.find((comp) => comp.id === id);
    if (!competitior) {
      throw new NotFoundException('Competitor could not be found');
    }
    return competitior;
  }

  create(
    competitor: Pick<ICompetitor, 'first_name' | 'last_name' | 'age' | 'gender'>
  ): ICompetitor {
    const current = this.comp$$.value;
    const newCompetitor: ICompetitor = {
      ...competitor,
      id: current.length + 1,
    };
    this.comp$$.next([...current, newCompetitor]);
    return newCompetitor;
  }
}
