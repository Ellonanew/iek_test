import { useSearchParams } from "react-router-dom";
import styles from './styles.module.css';
import classnames from "classnames";
import {useState} from "react";


export const Searchinput = () => {
    const [searchParams, setSearchParams] = useSearchParams({query: ''});

    const [query, setQuery] = useState()

    return (
        <form className={classnames(styles.form)} onSubmit={(event) => {
                event.preventDefault()
                searchParams.set('query', query || '')
                searchParams.set('page', 1)
                setSearchParams(searchParams)
            }
        }>
            <label className={classnames(styles.formLabel)}>
                <input className={styles.formInput} type="text"
                       placeholder="Поиск по текущему разделу"
                       defaultValue={searchParams.get('query') || ''}
                       onChange={event => {
                           setQuery(event.target.value)
                       }}
                />
            </label>
            <button className={classnames(styles.formButton)} type="submit">Найти</button>
        </form>
    )
}
