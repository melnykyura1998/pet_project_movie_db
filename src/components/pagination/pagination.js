
import {ArrowBackIosIcon, ArrowForwardIosIcon} from "../../UI";
import classes from "./pagination.module.css";

const Pagination = ({setQuery,query,numberPages}) => {
    const curentPage = +query.get('page');
    const pages = [];

    if(curentPage<=numberPages){
        for(let i=1; i<=numberPages;i++){
            pages.push(+i);
        }
    }else{
        for (let i = curentPage-numberPages+1;i<=curentPage;i++){
            pages.push(+i);
        }
    }

    const changePage = (i)=>{
        if(curentPage<1){
            setQuery({page:`1`});
        }else{
            const newPage = curentPage+i;
            setQuery({page:`${newPage}`});
        }
    }
    const toPage = (page) => {
          setQuery({page:`${page}`});
    }

    return (
        <div className={classes.wrapper}>
                <ArrowBackIosIcon onClick={()=>changePage(-1)}/>
                {pages.map(page=><button className={ curentPage===page? classes.page_active: classes.page} onClick={()=>toPage(page)} key={page}>{page}</button>)}
                <ArrowForwardIosIcon onClick={()=>changePage(+1)}/>
        </div>
    );
};
export {Pagination};