import { useState } from "react"
import "./MyOrg.css"


const MyOrg = (props) => {
    //Estado - hooks
    //useState
    //useState("") Lo que se pone entre comillas es el estado inicial
    //const [nombreVariable, funcionActualiza]
    // const [mostrar, actualizarMostrar] = useState(true);

    // const clickManage = () => {
        //     console.log("Mostrar/Ocultar elemento", mostrar);
        //     actualizarMostrar(!mostrar);
        // }

    // console.log(props);
    return <section className="orgSection">
        <h3 className="title" >Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MyOrg