import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const[query, setQuery] = useSearchParams({page:'1'});
    let currentPage =Number(query.get('page') || '1');
    return (
        <div>
            <button onClick= {() =>{
                if(currentPage > 1) {
                    setQuery({page:(--currentPage).toString()});
                }
            }}>prev</button>

            <button onClick= {() =>{
                if(currentPage) {
                    setQuery({page:(++currentPage).toString()});
                }
            }}>next</button>
        </div>
    );
};

export default PaginationComponent;