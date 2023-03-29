import DropdownCascade from 'react-dropdown-cascade';
import http from "../../helpers/http";
import {useEffect, useState} from "react";
import styles from "./styles.module.css";

export const Catalog = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        http.get("categories/")
            .then(result => {
                setItems(result.data.categories ?? [])
            })
            .catch(e => {
                console.log(e)
            })
    }, [])
    return (
        <DropdownCascade
            customStyles={{
                dropdown: {
                    style: {}
                },
                dropdownMenu: {
                    className: styles.dropDown
                }
            }}
            customInput={'li'}
            customInputProps={{className: styles.navItem, dangerouslySetInnerHTML: {__html: `<a class="${styles.navLink}">Каталог</a>`}}}
            items={items}
            fieldNames={{label: 'name', children: 'children'}}
        />
    )
}
