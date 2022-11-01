import { FaTrashAlt } from 'react-icons/fa';
import { api } from '../../api';
import { ContactInfo } from "../../api/@types";
import styles from './styles.module.scss';

export const ContactCard: React.FC<ContactInfo & {onCardDelete: () => Promise<void>}> = (props) => {

    const { type, value, id, onCardDelete } = props;

    const handleDeleteContact = async () => {
        await api.delete(`/contact/${id}`);

        onCardDelete();
    }

    return (
        <div
            className={styles.container}
        >
            <div>
                {type}
            </div>
            <div>
                {value}
            </div>
            <button onClick={handleDeleteContact}>
                <FaTrashAlt color="red" />
            </button>
        </div>
    )
}