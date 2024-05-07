
import { Layout } from 'antd';
import "./Main.css";
import { Outlet } from "react-router-dom";
import Menu from '../Components/Menu';

const App = () => {
  return (
    <Layout className="main-conteiner">
      <Menu />
      <Layout className="site-layout">
        <Layout.Content className="site-layout-background">
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;

