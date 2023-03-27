import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authenticateState } from "../states/Authenticate";
import { useForm } from "react-hook-form";
import TextField from "../components/atoms/forms/TextField";
import Button from "../components/atoms/forms/Button";

const Login = () => {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useRecoilState(authenticateState);

  useEffect(() => {
    if (authToken !== "") {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    if (authToken !== "") {
      navigate("/");
    }
  }, [authToken]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    fetch("http://localhost:8001/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((response) => response.json())
      .then((json) => {
        setAuthToken(json.token);
      })
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="grid h-screen w-screen grid-cols-2">
      <div className="bg-[url('https://images.unsplash.com/photo-1679678691002-cca4ae795169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60')]"></div>
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-3xl font-semibold">Login</h2>
          <p className="text-md mt-2 text-gray-500">
            Welcome back! Please enter your details.
          </p>

          <form
            className="mt-12 flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              type="email"
              placeholder="Enter email"
              register={register("email", { required: true })}
            />
            <TextField
              type="password"
              placeholder="Enter password"
              register={register("password", { required: true })}
            />
            <Button type="submit" varient="primary" buttonText="Sign in" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
