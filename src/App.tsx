import "./App.css";
import Alert from "./components/alert/Alert";
import {
  Ban,
  CircleCheckBig,
  Info,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

function App() {
  return (
    <>
      <Alert
        title="Error"
        className="alert-error"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat! Corrupti tenetur maiores quas voluptatum, quis illo est cumque nemo sit deserunt quod reprehenderit quaerat repellendus, labore odit repellat eum!"
        icon={<Ban size={18} />}
      />
      <Alert
        title="Success"
        className="alert-success"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat! Corrupti tenetur maiores quas voluptatum, quis illo est cumque nemo sit deserunt quod reprehenderit quaerat repellendus, labore odit repellat eum!"
        icon={<CircleCheckBig size={18} />}
      />
      <Alert
        title="Info"
        className="alert-info"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat! Corrupti tenetur maiores quas voluptatum, quis illo est cumque nemo sit deserunt quod reprehenderit quaerat repellendus, labore odit repellat eum!"
        icon={<Info size={18} />}
      />
      <Alert
        title="Warning"
        className="alert-warning"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat! Corrupti tenetur maiores quas voluptatum, quis illo est cumque nemo sit deserunt quod reprehenderit quaerat repellendus, labore odit repellat eum!"
        icon={<AlertTriangle size={18} />}
      />
      <Alert
        title="Default"
        className="alert-default"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat! Corrupti tenetur maiores quas voluptatum, quis illo est cumque nemo sit deserunt quod reprehenderit quaerat repellendus, labore odit repellat eum!"
        icon={<AlertCircle size={18} />}
      />
    </>
  );
}

export default App;
