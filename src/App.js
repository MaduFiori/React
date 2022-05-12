import {useState} from "react";

function App(){

  const [numero, setnumero] = useState(1);
  return (
    <div>
      <p>O número atual é {numero}</p>
      <p>
        <button title="Clique" onClick={() => setnumero(numero+1)}> Clique aqui</button>
      </p>
    </div>
  );
}

export default App;
