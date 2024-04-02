import { Button } from "@mui/material";
import { Layout } from "../../components/Layout/Layout";
import { MainPageTitle } from "./Home.style";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/CRM-teste-gratis");
  };

  const title = "O Poder da Salesforce\nCustomer 360 ao Seu\nAlcance."
  const subtitle = "Oferecemos uma abordagem integrada para\no sucesso empresarial, ajudando seus clientes\nalcançar ou superar suas metas de ROI."
  return (
    <>
      <Layout>
        <MainPageTitle>
          <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <Button onClick={handleClick}>Faça seu teste grátis</Button>
          </div>
          <img src="src\assets\imagem-menu.png" alt="" />
        </MainPageTitle>
        
            
      </Layout>
    </>
  );
}
