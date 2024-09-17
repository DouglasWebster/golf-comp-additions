export interface ICompetitor {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    age: number;
}

export type ICreateCompetitor = Pick<ICompetitor, 'first_name' | 'last_name' | 'gender' | 'age'>;
export type IUpdateCompetitor = Partial<Omit<ICompetitor, 'id'>>;
export type IUpsertCompetitor = ICompetitor;