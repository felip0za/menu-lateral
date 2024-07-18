import { Button, Layout, theme } from 'antd'
import {MenuUnfoldOutlined, MenuFoldOutlined} from "@ant-design/icons"
import Logo from './componentes/Logo';
import MenuList from './componentes/MenuList';
import { useState } from 'react';
import ToggleThemeButton from './componentes/ToggleThemeButton';

const {Header, Sider} = Layout;
function App() {
  const[darkTheme, setDarkTheme] = useState(true);
  const[collapsed, setCollapsed] = useState(false)
  

  const toggleTheme = () =>{
    setDarkTheme(!darkTheme);
  };

  const{
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <>
      <Layout>
        <Sider 
          collapsed={collapsed} 
          collapsible
          trigger={null}
          theme={darkTheme? "dark": "light"} className="sidebar"
        >
          <Logo />
          <MenuList darkTheme ={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme}toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{padding: 0, background: colorBgContainer}}>
            <Button 
            type="text" 
            className="toggle"
            onClick={()=> setCollapsed(!collapsed)}
            icon={collapsed ?
            <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          </Header>
        </Layout>
      </Layout>
    </>
  )
}

export default App
