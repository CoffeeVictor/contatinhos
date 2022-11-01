import { Contact } from '@prisma/client';

export type CreateContactData = {
    type: string;
    value: string;
    personId: number;
}

export type ContactUpdateData = {
    type: string;
    value: string;
}

export abstract interface IContactRepository {
    async create(data: CreateContactData): Promise<Contact>;
    async list(): Promise<Contact[]>;
    async findById(id: number): Promise<Contact | null>;
    async update(id: number, data: ContactUpdateData): Promise<Contact | null>;
    async delete(id: number): Promise<void>;
}