import React, {useState} from "react";
import styles from './Paginator.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    currentPage: number
    pageSize: number
    portionSize: number

    onPageChanged: (pageNumber: number) => void
}
const Paginator :React.FC<PaginatorPropsType> = ({totalUsersCount, currentPage, pageSize, onPageChanged, portionSize }) => {
    //порядковый номер порции 1-10 (1) 11-20 (2)
    const [portionNumber, setPortionNumber] = useState(1);

    //получаем общее число страниц 2563
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
console.log(pagesCount)
    let pages: Array<number> = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    //получаем число порций страниц 253
    let portionCount = Math.ceil(pagesCount / portionSize)
console.log(portionCount)
    //определяем левую границу порции (если вторая порция (2-1)*10 +1)
     const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    //определяем правую границу порции (если вторая порция 2*10)
     const rightPortionPageNumber = portionNumber * portionSize

    const leftClickHandler = () => {
        setPortionNumber(portionNumber - 1)
    }

    const rightClickHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={styles.paginator}>
            {/*если не первая порция покажи кнопки */}
            {portionNumber > 1 &&
                <>
                    <button onClick={() => {
                        setPortionNumber(1)
                    }}> {'<<'}</button>
                    <button onClick={leftClickHandler}>prev</button>
                </>
            }
            {pages
                // фильтруем страницы должны быть больше или равны левой границе и меньше или равны правой границе
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <span
                        key={p}
                        className={currentPage === p ? styles.pageNumber + ' ' + styles.selectedPage : styles.pageNumber}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >
                            {p}</span>
                })}
            {/*если порядковый номер порции меньше чем число порций, то покажи кнопки*/}
            {portionNumber < portionCount &&
                <>
                    <button onClick={rightClickHandler}>next</button>
                    <button onClick={() => {
                        setPortionNumber(portionCount)
                    }}>last
                    </button>
                </>
            }
        </div>
    );
};

export default Paginator;