import { useState } from "react";
import "./App.scss";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState();
  const [error, setError] = useState(false);

  return (
    <div className="app">
      <div className="app-container">
        <img
          src="https://pbs.twimg.com/profile_images/603719144190521344/PRa-Oksa.jpg"
          alt=""
        />
        <form className="signUp">
          <input type="text" placeholder="Nama" required />
          <legend>Jenis Kelamin</legend>
          <div className="gender">
            <input type="radio" value="Pria" name="gender" /> Pria
            <input type="radio" value="Wanita" name="gender" /> Wanita
          </div>
          <legend>Hobby</legend>
          <div className="signUp-hobby">
            <div>
              <label htmlFor="hobyy">
                {" "}
                Hobyy1
                <input type="checkbox" value="Playball" name="hobby" id="" />
              </label>
              <label htmlFor="hobyy">
                {" "}
                Hobyy2
                <input type="checkbox" value="Playball" name="hobby" id="" />
              </label>
            </div>
            <div>
              <label htmlFor="hobyy">
                {" "}
                Hobyy3
                <input type="checkbox" value="Playball" name="hobby" id="" />
              </label>
              <label htmlFor="hobyy">
                {" "}
                Lainnya
                <input type="checkbox" value="Playball" name="hobby" id="" />
              </label>
            </div>
          </div>
          <input type="email" name="email" id="" placeholder="Email" />
          <input type="number" placeholder="Telp" />
          <input type="text" placeholder="Username" max="10" />
          <div className="signUp-button">
            <button>Daftar</button>
            <button>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
