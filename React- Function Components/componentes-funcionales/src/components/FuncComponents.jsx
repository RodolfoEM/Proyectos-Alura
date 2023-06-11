import { useState } from "react"

function FuncComponent() {
    // Aqui usamos el state para partir de un valor inicial, y cuando se dé click a los diferentes botones, ese valor sume o reste 1
    const [value, setValue] = useState(0)

    return <div>
        Componente Funcional
        <p>
            <button onClick={() => setValue(value-1)}>-</button>
            {value}
            <button onClick={() => setValue(value+1)}>+</button>
        </p>
    </div>
}

export default FuncComponent