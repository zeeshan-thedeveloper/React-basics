import HOC from './HOC'
const Comp1=(props)=>{
    console.log(props.isLogedIn)
    return <div>
        <h1>Comp1 {props.isLogedIn}</h1>
        <button onClick={props.func1}>Hit me</button>
    </div>

}

// export default HOC(Comp1);
export default Comp1