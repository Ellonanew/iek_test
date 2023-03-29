import styles from "./styles.module.css";

export const Item = ({item}) => {

    const imgSrc = item.imageVariants.find((e) => e.width === 100) || item.imageUrl || ""

    return (
        <div className={styles.itemWrapper}>
            <div className={styles.itemPhoto}>
                <img src={imgSrc.url} className={styles.itemImage}/>
            </div>
            <div className={styles.itemArticle}>
                <p>{item.article}</p>
            </div>
            <div className={styles.itemName}>
                <p>{item.name}</p>
            </div>
        </div>
    )

}
