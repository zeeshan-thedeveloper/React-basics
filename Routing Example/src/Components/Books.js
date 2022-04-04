import { Grid } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import ListOfBooks from "./ListOfBooks";
import book_1 from './Images/book_1.jpg'
import book_2 from './Images/book_2.jpg'
import book_3 from './Images/book_3.jpg'
import book_4 from './Images/book_4.jpg'

export default function Books() {
  const [searchParam, setSearchParams] = useSearchParams();
  const name  = searchParam.get("name");
  const password  = searchParam.get("password");
  
  return (
    <div>
      <h1>Books</h1>
      <Grid container>
        <Grid item xs={3}>
          <ListOfBooks />
        </Grid>
        <Grid item xs={3}>
            {
              `Name : ${name}`
            }
            <br></br>
            {
              `Password : ${password}`
            }
            {/* {(searchParam.get('bookId')=='book_1') && <img src={book_1} width="50%"/>}
            {(searchParam.get('bookId')=='book_2') && <img src={book_2} width="50%"/>}
            {(searchParam.get('bookId')=='book_3') && <img src={book_3} width="50%"/>}
            {(searchParam.get('bookId')=='book_4') && <img src={book_4} width="50%"/>} */}
        </Grid>
      </Grid>
    </div>
  );
}
