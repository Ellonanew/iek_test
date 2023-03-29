import styles from './styles.module.css';
import classnames from "classnames";
import { useSearchParams } from "react-router-dom";
const defaultPagination = {pageSize: 20, page: 1}

export const Pagination = ({totalRecords = 0}) => {
    const [searchParams, setSearchParams] = useSearchParams(defaultPagination);

    const leftArrow = 'left'
    const rightArrow = 'right'
    const totalPages = searchParams.get('pageSize') ? Math.ceil(totalRecords / parseInt(searchParams.get('pageSize'))) : 0;
    let currentPage = parseInt(searchParams.get('page')) || 1
    if (currentPage > totalPages){
        currentPage = totalPages
        searchParams.set('page', currentPage)
        setSearchParams(searchParams)
    }

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    }

    const handleMoveLeft = event => {
        event.preventDefault();
        goToPage(currentPage - (2 * 2) - 1);
    }

    const handleMoveRight = event => {
        event.preventDefault();
        goToPage(currentPage + (2 * 2) + 1);
    }

    const goToPage = page => {
        const currentPage = Math.max(0, Math.min(page, totalPages));
        searchParams.set('page',currentPage || 1)
        setSearchParams(searchParams)
    }

    const handleClick = page => evt => {
        evt.preventDefault();
        goToPage(page);
    }

    const preparePages = () => {
        const totalNumbers = (2 * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {

            const startPage = Math.max(2, currentPage - 2);
            const endPage = Math.min(totalPages - 1, currentPage + 2);

            let pages = range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [leftArrow, ...extraPages, ...pages];
                    break;
                }

                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, rightArrow];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [leftArrow, ...pages, rightArrow];
                    break;
                }
            }

            return [1, ...pages, totalPages];

        }

        return range(1, totalPages);
    }

    let pages = preparePages()
    return (
        <div className={classnames(styles.root)}>
            <div className={classnames(styles.pageSize)}>
                <div className={classnames(styles.pageSizeText)}>Строк на странице</div>
                <select className={classnames(styles.outputSelect)}
                        value={searchParams.get('pageSize') || 20}
                        onChange={(event) => {
                                searchParams.set('pageSize', event.target.value || '')
                                setSearchParams(searchParams)
                            }
                        }
                >
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                    <option value={40}>40</option>
                </select>
                <div className={classnames(styles.pageSizeText)}>из</div>
                <div className={classnames(styles.pageSizeText)}>{totalRecords}</div>
            </div>
            <div className={classnames(styles.paginationWrapper)}>
                <ul className={classnames(styles.paginationList)}>
                    { pages.map((page, index) => {

                        if (page === leftArrow) return (
                            <li key={index}>
                                <button className={classnames(styles.paginationButton)} onClick={handleMoveLeft}>
                                    <span aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                        );

                        if (page === rightArrow) return (
                            <li key={index} className="page-item">
                                <button className={classnames(styles.paginationButton)} onClick={handleMoveRight}>
                                    <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        );

                        return (
                            <li key={index}>
                                <button
                                    className={classnames(styles.paginationButton, {[styles.activeBtn]: currentPage === page})}
                                    onClick={ handleClick(page) }>{ page }</button>
                            </li>
                        );
                    }) }
                </ul>
            </div>
        </div>
    )

}
