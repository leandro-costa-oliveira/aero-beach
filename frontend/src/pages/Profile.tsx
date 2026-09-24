import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../Context/AuthContext";

export const Profile = () => {
  const { setAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    setAccessToken(null);
    navigate("/login");
  }

  return (
    <>
      <h1>Profile Page - Em construção!</h1>

      <Button onClick={handleLogout}>
        Sair
      </Button>
    </>
  );
};