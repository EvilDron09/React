
import './App.css'
import {Fragment, useState} from "react";
import {useGetPaginatedPosts} from "./api/query/posts/useGetPaginatedPosts.ts";

const DEFAULT_LIMIT = 10;
const TOTAL_PAGES = 10;

const App = () => {
const [pagination, setPagination] = useState<{limit:number; offset:number}>({
    limit:DEFAULT_LIMIT,
    offset:0,
});

const {
    isFetching:isPaginatedPostFetching,
    refetch,
    data:paginatedPosts,
} = useGetPaginatedPosts(pagination);

console.log(paginatedPosts);

const handleChangePage = async(offset:number) =>{
    setPagination((prevState) => ({...prevState, offset}));
    await refetch();
};

if(isPaginatedPostFetching) return  <div>Loading...</div>;

if(!paginatedPosts){
    return null
}

  return (
    <div>
        {paginatedPosts.map((item)=>(
            <Fragment key={item.id}>
                <div>title: {item.id} {item.title}</div>
                <div>body: {item.body}</div>
                <div>User I: {item.userId}</div>
                <div>User I: {item.userId}</div>
            </Fragment>
        ))}
        <div>
            <button onClick={() => handleChangePage(0)} disabled={pagination.offset === 0}>Перша</button>
            <button onClick={() => handleChangePage(pagination.offset-pagination.limit)} disabled={pagination.offset === 0}>Попередній</button>
            <span>Сторінка {pagination.offset / pagination.limit + 1 }</span>
            <button onClick={() => handleChangePage(pagination.offset-pagination.limit)} disabled={pagination.offset === (TOTAL_PAGES - 1)* pagination.limit}>Наступна</button>
            <button onClick={() => handleChangePage((TOTAL_PAGES - 1))} disabled={pagination.offset === (TOTAL_PAGES - 1)* pagination.limit}>Остання</button>
        </div>
    </div>
  )
}

export default App
