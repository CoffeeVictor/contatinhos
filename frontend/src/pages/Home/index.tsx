import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api';
import { GradientCard } from '../../components/GradientCard';
import styles from './styles.module.scss';

export type RegisterFormData = {
    name: string;
}

export const Home: React.FC = () => {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<RegisterFormData>();

    const handleRegister = async (data: RegisterFormData) => {
        const { name } = data;

        const content = await api.post('/person', {
            name
        })

        navigate(`/${content.data.id}`)
    }

    return (
        <>
            <div className={styles.container}>
                <main className={styles.cardContainer}>
                    <GradientCard>
                        <div className={styles.headerContainer}>
                            <h1 className={styles.header} >Contatinhos, compartilhe os seus!</h1>
                            <h2 className={styles.sub} >Ainda não tem seu usuário? Crie abaixo.</h2>
                        </div>
                        <div className={styles.formContainer}>
                            <form
                                className={styles.form}
                                onSubmit={handleSubmit(handleRegister)}
                            >
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Escolha seu usuário"
                                    {...register('name')}
                                />
                                <button
                                    className={styles.submitButton}
                                    type='submit'
                                >
                                    Registrar
                                </button>
                            </form>
                        </div>
                    </GradientCard>
                </main>
            </div>
        </>
    )
}