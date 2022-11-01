import { useForm } from "react-hook-form";
import { api } from "../../api";
import styles from './styles.module.scss';

export type NewContactFormData = {
    type: string;
    value: string;
}

export const ContactCardAdder: React.FC<{personId: number, onNewCard: () => Promise<void>}> = (props) => {

    const { personId, onNewCard } = props;
    
    const {register, handleSubmit} = useForm<NewContactFormData>();

    const addNewCard = async (data: NewContactFormData) => {

        const {type, value} = data;

        await api.post('/contact', {
            personId,
            type,
            value
        });

        onNewCard();
    }

    return (
        <div className={styles.container}>
            <h1>Adicione um novo contatinho</h1>
            <form
                onSubmit={handleSubmit(addNewCard)}
                className={styles.form}
            >
                <input
                    type="text"
                    placeholder="Tipo (ex: Email)"
                    {...register('type')}
                />
                <input
                    type="text"
                    placeholder="Contato (ex: example@mail.com)"
                    {...register('value')}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
}