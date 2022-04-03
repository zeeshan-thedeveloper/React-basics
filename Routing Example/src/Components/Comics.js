import { useParams } from "react-router-dom"

export default function Comics(){
    const {id}=useParams();
    console.log(id)
    return <h1>Comics : {id}</h1>
}