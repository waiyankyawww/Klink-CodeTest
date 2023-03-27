import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticateState } from "../states/Authenticate";
import OrderDetails from "../components/organisms/OrderDetails";
import Products from "../components/organisms/Products";

const Home = () => {
  const navigate = useNavigate();
  const authToken = useRecoilValue(authenticateState);

  useEffect(() => {
    if (authToken === "") {
      navigate('/login')
    }
  }, []);

  return (
    <div className="grid h-screen w-screen grid-cols-12 overflow-hidden">
      <div className="col-span-9">
        <Products />
      </div>
      <div className="col-span-3">
        <OrderDetails />
      </div>
    </div>
  );
};

export default Home;
