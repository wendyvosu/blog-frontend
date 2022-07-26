import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";

const LoginForm = (props) => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //     setFormData({...formData, [e.target.id]: e.target.value})
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios.post("http://localhost:5000/auth", formData).then((res) => {
      console.log(res.data);

      if (res.data.token && res.data.user) {
        localStorage.setItem("userToken", res.data.token);
        props.setUser(res.data.user)
        history.push("/home");
      } else {
        console.error(res.data);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.id]: e.target.value })
            }
          />
        </div>

        <input type="submit" className="btn btn-info" />
      </form>
    </div>
  );
};

export default LoginForm;