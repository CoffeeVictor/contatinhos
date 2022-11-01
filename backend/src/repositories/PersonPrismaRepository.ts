import { PrismaClient } from '@prisma/client';
import { CreatePersonData, IPersonRepository } from "./PersonRepository";

export class PersonPrismaRepository implements IPersonRepository {

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }
    
    public async create(data: CreatePersonData) {

        const { name } = data;

        const personAlreadyExists = await this.prismaClient.person.findFirst({
            where: {
                name
            }
        });

        if (personAlreadyExists) return personAlreadyExists;

        const newPerson = await this.prismaClient.person.create({
            data
        });

        return newPerson;
    }

    public async list() {
        return await this.prismaClient.person.findMany();
    }

    public async findById(id: number) {
        const person = await this.prismaClient.person.findUnique({
            where: {
                id
            },
            include: {
                contacts: {
                    orderBy: {
                        id: 'asc'
                    },
                    select: {
                        id: true,
                        type: true,
                        value: true
                    }
                }
            }
        })

        return person;
    }

    public async update(id: number, name: string) {

        const personExists = await this.prismaClient.person.findUnique({
            where: {
                id
            }
        });

        if (!personExists) return null;

        const person = await this.prismaClient.person.update({
            where: {
                id
            },
            data: {
                name
            }
        });

        return person;
    }

    public async delete(id: number) {
        const personExists = await this.prismaClient.person.findUnique({
            where: {
                id
            }
        });

        if (!personExists) return;

        await this.prismaClient.person.delete({
            where: {
                id
            }
        })
    }
}