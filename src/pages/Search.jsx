import styles from "./search.module.css"
import {Searchinput} from "../components/search/searchinput";
import {Results} from "../components/search/results";
import classnames from "classnames";
import {Pagination} from "../components/pagination/pagination";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import http from "../helpers/http";

export const Search = () => {
    const [searchParams] = useSearchParams()
    const [items, setItems] = useState([])
    const [count, setCount] = useState(0)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        if (!searchParams.get('query') || searchParams.get('query').length === 0) {
            setItems([])
            setCount(0)
            return
        }
        setLoading(true)
        const params = {};
        for(let [key, value] of searchParams.entries()) {
            params[key] = value;
        }

        http.post("search", params)
            .then(result => {
                setItems(result.data.products ?? [])
                setCount(result.data.total ?? 0)
                setLoading(false)
            })
            .catch(e => {
                console.log(e)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [searchParams])

    return (
        <div className={classnames(styles.searchPage)}>
            <div className={classnames(styles.pageWrapper)}>
                <h1>Результаты поиска</h1>
                <Searchinput />
                <Results items={items} loading={isLoading} totalRecords={count}/>
                {!isLoading && count > 0 && <Pagination totalRecords={count}/>}

            </div>
        </div>
    )
}
