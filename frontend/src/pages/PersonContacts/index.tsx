import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api";
import { PersonInfo } from "../../api/@types";
import { ContactCard } from "../../components/ContactCard";
import { ContactCardAdder } from "../../components/ContactCardAdder";
import { GradientCard } from "../../components/GradientCard";
import { Loader } from "../../components/Loader";
import styles from './styles.module.scss';

export const PersonContacts: React.FC = () => {

    const { personId } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [personInfo, setPersonInfo] = useState<PersonInfo>();

    const getPersonInfo = async () => {
        setIsLoading(true);

        const personData = await api.get<PersonInfo>(`/person/${personId}`);

        setPersonInfo(personData.data);

        setIsLoading(false);
    }

    useEffect(() => {
        getPersonInfo();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <main className={styles.cardContainer}>
                    <GradientCard>
                        {
                            isLoading ? 
                            <Loader />
                            :
                            <>
                                <div className={styles.cardHeader}>
                                    <h1 className={styles.header}>{personInfo?.name}</h1>
                                </div>
                                <div className={styles.cardBody}>
                                    {
                                        personInfo?.contacts.map(
                                            ({id, type, value}) => (
                                                <ContactCard
                                                    key={id}
                                                    id={id}
                                                    type={type}
                                                    value={value}
                                                    onCardDelete={async () => {
                                                        getPersonInfo();
                                                    }}
                                                />
                                            )
                                        )
                                    }
                                </div>
                                <ContactCardAdder
                                    personId={Number(personId)}
                                    onNewCard={ async () => {
                                        getPersonInfo();
                                    }
                                } />
                            </>
                        }
                    </GradientCard>
                </main>
            </div>
        </>
    )
}