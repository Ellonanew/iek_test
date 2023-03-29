import styles from "./styles.module.css"
import {Item} from "./item";
import classnames from "classnames";

export const Results = ({items, loading, totalRecords}) => {

    if (loading) return (
        <div className={styles.spinner}>
            <div className={styles.loadingSpinner}/>
        </div>
    )

    if (totalRecords === 0) return (<div>Товаров не найдено</div>)

    return (
        <div className={classnames(styles.resultTable)}>
            <div className={classnames(styles.itemWrapper)}>
                <div className={styles.itemPhoto}>Фото</div>
                <div className={styles.itemArticle}>Артикул</div>
                <div className={styles.itemName}>Наименование</div>
            </div>
            {items.map((elem, i) => ( <Item item={elem} key={i}/> ))}

        </div>

    )

}
