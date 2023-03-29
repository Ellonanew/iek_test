import {Item} from "./item";
import {Catalog} from "./catalog";
import {menuItems} from "../../helpers/const";
import styles from './styles.module.css';

export const Menu = () => {
    return (
        <ul className={styles.navList}>
            {menuItems.map(e => {
                return e.isCatalog ? <Catalog key={e.name}/> : <Item item={e} key={e.name}/>
            })}
        </ul>
    )
}
