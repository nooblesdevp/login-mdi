import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.scss";

function App() {
  const { register, handleSubmit, errors, input } = useForm();
  const [valid, setValid] = useState(true);
  const [field, setField] = useState("");

  const onSubmit = (data) => {
    console.log("data", data);
    setValid(true);
    if (valid === true) {
      alert("Daftar sukses, check Console.log");
    }
  };

  return (
    <div className="app">
      <div className="app-container">
        <img
          src="https://pbs.twimg.com/profile_images/603719144190521344/PRa-Oksa.jpg"
          alt=""
        />

        <form className="signUp" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nama"
            name="name"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.name && <p>Minimal 3 Karakter</p>}
          <legend>Jenis Kelamin</legend>
          <div
            className="gender"
            name="gander"
            ref={register({ required: true })}
          >
            <input type="radio" value="Pria" name="gender" /> Pria
            <input type="radio" value="Wanita" name="gender" /> Wanita
          </div>
          <legend>Hobby</legend>
          <div className="signUp-hobby">
            <div>
              <label htmlFor="hobyy">
                {" "}
                Hobyy1
                <input type="checkbox" value="Playball" name="Playball" id="" />
              </label>
              <label htmlFor="hobyy">
                {" "}
                Hobyy2
                <input
                  type="checkbox"
                  value="Playball2"
                  name="Playball2"
                  id=""
                />
              </label>
            </div>
            <div>
              <label htmlFor="hobyy">
                {" "}
                Hobyy3
                <input
                  type="checkbox"
                  value="Playball3"
                  name="Playball3"
                  id=""
                />
              </label>
              <label htmlFor="hobyy">
                {" "}
                Lainnya
                <input
                  type="checkbox"
                  value="Playball4"
                  name="Playball4"
                  id=""
                />
              </label>
            </div>
          </div>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Error email, Example blabla@any.thing</p>}

          <input
            type="number"
            placeholder="Telp"
            name="number"
            ref={register({ required: true })}
          />
          {errors.number && <p>Harus Nomor</p>}

          <input
            type="text"
            placeholder="Username"
            name="username"
            ref={register({ required: true, maxLength: 10 })}
          />
          {errors.username && <p> Username Maksimal 10 karakter</p>}
          <input
            type="password"
            placeholder="Password "
            name="password"
            ref={register({ required: true, minLength: 7 })}
          />
          {errors.password && <p> Password Maksimal 10 karakter</p>}
          <div className="signUp-button">
            <button type="submit">Daftar</button>
            <button disabled>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
