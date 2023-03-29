import styles from './styles.module.css';
import classnames from "classnames";
import sprite from "../../assets/img/sprite.svg";

export const Item = ({item}) => {

    return (
        <li className={styles.navItem}>
            <a href={`${item.link}`} className={styles.navLink}>{item.name}</a>
            {item.listItems &&
                <div className={styles.navSecond}>
                    <div className={styles.navSecondWrapper}>
                        <div className={styles.navSecondAbout}>
                            <p className={styles.navAboutTitle}>{item.aboutTitle}</p>
                            <p className={styles.navAboutText}>{item.aboutText}</p>
                            <a href={`${item.link}`} className={classnames(styles.btn, styles.btnYellow, styles.btnSizeM)}>{item.moreText}</a>
                        </div>
                        <ul className={styles.navSecondList}>
                        {item.listItems.map((i, ind) => {
                            return <li className={styles.navSecondItem} key={ind}>
                                <p className={styles.navSecondTitle}>{i.subtitle}</p>
                                <ul className={styles.navSecondMenu}>
                                    {i.items.map((subItem, inx) => {
                                        return <li className={styles.navMenuItem} key={inx}><a
                                            href='#'
                                            className={styles.navMenuLink}>
                                            <svg width="24" height="24">
                                                <use xlinkHref={`${sprite}#icon-file`}/>
                                            </svg>
                                            <span>{subItem.title}</span></a>
                                            <p className={styles.navMenuText}>{subItem.description}</p>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        })}
                        </ul>
                    </div>
                </div>
            }
        </li>
    )
}
