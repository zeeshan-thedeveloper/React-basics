import { useParams } from "react-router-dom"

export default function Comics(){
    const {mass}=useParams();
    console.log(mass)
    return <h1>Comics : {mass}</h1>
}