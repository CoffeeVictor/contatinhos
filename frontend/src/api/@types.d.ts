export type ContactInfo = {
    id: number;
    type: string;
    value: string;
}

export type PersonInfo = {
    id: number;
    name: number;
    contacts: ContactInfo[];
}