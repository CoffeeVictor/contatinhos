import { Request, Router } from "express";
import { ContactPrismaRepository } from "./repositories/ContactPrismaRepository";
import { ContactUpdateData, CreateContactData } from "./repositories/ContactRepository";
import { PersonPrismaRepository } from "./repositories/PersonPrismaRepository";
import { CreatePersonData, PersonUpdateData } from "./repositories/PersonRepository";

const router = Router();


// Person Routes

const personPrismaRepository = new PersonPrismaRepository();

router.post('/person', async (req: Request<{}, {}, CreatePersonData>, res) => {
    const { name } = req.body;

    const newPerson = await personPrismaRepository.create({ name });

    return res.status(201).json(newPerson);
});

router.get('/person', async (req, res) => {
    const personList = await personPrismaRepository.list();

    return res.json(personList);
});

router.get('/person/:id', async (req, res) => {
    const { id } = req.params;

    const person = await personPrismaRepository.findById(Number(id));

    if(!person) return res.status(404).send(`Person with id '${id}' not found.`);

    return res.json(person);
});

router.put('/person/:id', async (req: Request<{id: string}, {}, PersonUpdateData>, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const updatedPerson = await personPrismaRepository.update(Number(id), name);

    if(!updatedPerson) return res.status(404).send(`Person with id '${id}' not found.`);

    return res.json(updatedPerson);
});

router.delete('/person/:id', async (req, res) => {
    const { id } = req.params;

    await personPrismaRepository.delete(Number(id));

    return res.status(200).send();
});

// Contact Routes

const contactPrismaRepository = new ContactPrismaRepository();

router.post('/contact', async (req: Request<{}, {}, CreateContactData>, res) => {
    const { personId, type, value } = req.body;

    const newContact = await contactPrismaRepository.create({
        personId, type, value
    });

    return res.json(newContact);
});

router.get('/contact', async (req, res) => {
    const contactList = await contactPrismaRepository.list();

    return res.json(contactList);
});

router.get('/contact/:id', async (req, res) => {

    const { id } = req.params;

    const contact = await contactPrismaRepository.findById(Number(id));

    if (!contact) return res.status(404).send(`Contact with id '${id}' not found.`);

    return res.json(contact);
});

router.put('/contact/:id', async (req: Request<{id: string}, {}, ContactUpdateData>, res) => {
    const { id } = req.params;
    const { type, value } = req.body;

    const updatedContact = await contactPrismaRepository.update(Number(id), {type, value});

    if (!updatedContact) return res.status(404).send(`Contact with id '${id}' not found.`);

    return res.json(updatedContact);
});

router.delete('/contact/:id', async (req, res) => {
    const { id } = req.params;

    await contactPrismaRepository.delete(Number(id));

    return res.status(200).send();
});

export {
    router
};

