import styles from './styles.module.css';
import sprite from '../../assets/img/sprite.svg'

import {Menu} from "../menu/menu";
import classnames from "classnames";
import {useState} from "react";

export const Header = ({setOverlay, showOverlay}) => {
    let [isActive, setActive] = useState()
    return (
        <header className={classnames(styles.root)}>
            <div className={classnames(styles.wrapper, styles.container, styles.containerHeader)}>
               <button className={classnames(styles.btnMenu, styles.btn, styles.btnYellow, styles.btnSquare, {[styles.btnMenuClose]: isActive})} type="button" onClick={() => {
                   setActive(!isActive)
                   setOverlay(!showOverlay)
               }}/>
                <div className={styles.logoWrapper}>
                    <a href="#">
                        <svg className={styles.logoSvg} width="51" height="25" fill="#363C44">
                            <use xlinkHref={`${sprite}#icon-logo`}/>
                        </svg>
                    </a>
                </div>
                <nav className={classnames(styles.headerNav, styles.nav, {[styles.navShow]: isActive})}>
                    <button className={classnames(styles.btnBack, styles.btn)} type="button">
                        <svg width="24" height="24" fill="#fdcb0b">
                            <use xlinkHref={`${sprite}#icon-arrow-left`}/>
                        </svg>
                        Назад
                    </button>
                    <Menu/>
                </nav>
                <div className={styles.menuUser}>
                    <div className={classnames(styles.userDiscount, styles.clientDiscount)}>
                        <div className={styles.discountWrapper}>
                            <span className={styles.discountPercent}>25%</span>
                            <span className={styles.discountText}>Ваша скидка</span>
                        </div>
                    </div>
                    <ul className={styles.menuUser}>
                        <li className={styles.menuUserItem}>
                            <div className={styles.profileMenu}>
                                <button className={classnames(styles.btn, styles.btnGrey, styles.btnIconM)} type="button"
                                        aria-label="Меню пользователя">
                                    <svg className={classnames(styles.btnSvg, styles.btnSvgStroke)} width="20" height="20">
                                        <use xlinkHref={`${sprite}#icon-user`}/>
                                    </svg>
                                </button>
                                <div className={styles.profileMenuWrapper}>
                                    <ul className={styles.profileMenuList}>
                                        <li className={styles.profileMenuItem}><a
                                            href="http://10.14.3.53/catalog-searching-results.html"
                                            className={styles.profileMenuLink}>
                                            <svg width="20" height="20" fill="#fdcb0b">
                                                <use xlinkHref={`${sprite}#icon-profile`}/>
                                            </svg>
                                            О профиле</a></li>
                                        <li className={styles.profileMenuItem}><a
                                            href="http://10.14.3.53/catalog-searching-results.html"
                                            className={styles.profileMenuLink}>
                                            <svg width="20" height="20" fill="transparent" stroke="#fdcb0b">
                                                <use xlinkHref={`${sprite}#icon-settings`}/>
                                            </svg>
                                            Настройки</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={styles.menuUserItem}>
                            <button className={classnames(styles.btn, styles.btnGrey, styles.btnIconM)} type="button" aria-label="Меню пользователя">
                                <svg className={classnames(styles.btnSvg, styles.btn__svgFill)} width="20" height="20">
                                    <use xlinkHref={`${sprite}#icon-exit`}/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
