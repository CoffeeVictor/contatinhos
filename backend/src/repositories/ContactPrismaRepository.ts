import { Contact, PrismaClient } from ".prisma/client";
import { ContactUpdateData, CreateContactData, IContactRepository } from "./ContactRepository";

export class ContactPrismaRepository implements IContactRepository {

    private readonly prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    async create(data: CreateContactData): Promise<Contact> {

        const { personId, type, value } = data;

        const person = await this.prismaClient.person.findUnique({
            where: {
                id: personId
            }
        });

        if (!person) throw new Error("Invalid Person Id");

        const newContact = await this.prismaClient.contact.create({
            data: {
                type, value, personId
            }
        });

        return newContact;
    }

    async list(): Promise<Contact[]> {
        const contactList = await this.prismaClient.contact.findMany();

        return contactList;
    }

    async findById(id: number): Promise<Contact | null> {
        const contact = await this.prismaClient.contact.findUnique({
            where: {
                id
            }
        });

        return contact;
    }

    async update(id: number, data: ContactUpdateData): Promise<Contact | null> {
        const contact = await this.prismaClient.contact.findUnique({
            where: {
                id
            }
        });

        if (!contact) return null;

        const { type, value } = data;

        const updatedContact = await this.prismaClient.contact.update({
            where: {
                id
            },
            data: {
                type,
                value
            }
        });

        return updatedContact;
    }
    
    async delete(id: number): Promise<void> {
        const contact = await this.prismaClient.contact.findUnique({
            where: {
                id
            }
        });

        if (!contact) return;

        await this.prismaClient.contact.delete({
            where: {
                id
            }
        });
    }
}