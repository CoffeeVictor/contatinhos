import { PropsWithChildren } from "react";
import styles from './styles.module.scss';

export const GradientCard: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={styles.container}>
            { children }
        </div>
    )
}