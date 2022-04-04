import { useSearchParams } from "react-router-dom";

const data = [
  {
    bookName: "Book A",
    bookid: "book_1",
  },
  {
    bookName: "Book B",
    bookid: "book_2",
  },
  {
    bookName: "Book C",
    bookid: "book_3",
  },
  {
    bookName: "Book D",
    bookid: "book_4",
  },
];

const ListOfBooks = () => {
  const [searchParam,setSearchParams]=useSearchParams();

  return (
    <div style={{marginLeft:"5%"}}>
      <h1>List</h1>
      <button onClick={()=>{
        searchParam.set("name","Massoma");
        searchParam.set("password","1234e");
        setSearchParams(searchParam);
        }}>Create url</button>
      {/* {data.map((item)=>{
          return<div style={{marginTop:"1%"}}>
              <span>{item.bookName}</span>
              <button onClick={(e)=>{
                  searchParam.set("bookId",item.bookid);
                  setSearchParams(searchParam);
              }} style={{marginLeft:"2%"}}>Open</button>
          </div>
      })} */}
    </div>
  );
};

export default ListOfBooks;
