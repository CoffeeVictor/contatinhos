import { Person } from '@prisma/client';

export type CreatePersonData = {
    name: string;
}

export type PersonUpdateData = {
    name: string;
}

export abstract interface IPersonRepository {
    create(data: CreatePersonData): Promise<Person>;
    list(): Promise<Person[]>;
    findById(id: number): Promise<Person | null>;
    update(id: number, name: string): Promise<Person | null>;
    delete(id: number): Promise<void>;
}