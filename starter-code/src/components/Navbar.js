import React from 'react';
import { Layout, Menu} from 'antd';
import CoolButton from './CoolButton';
const { Header} = Layout;


class Navbar extends React.Component {
  render() {
    return (
    <Layout className="layout">
        <Header>
        
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{ lineHeight: '64px' }}
                >
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" width={112} height={28} />
                    <Menu.Item key="1">Home</Menu.Item>

                    <Menu.Item key="2"><CoolButton type="danger" name="Signup">Signup</CoolButton></Menu.Item>
                    <Menu.Item key="3"><CoolButton type="primary" name="Login">Login</CoolButton></Menu.Item>
                    
                </Menu>

               
        </Header>
        
    </Layout>
    )
  }
}

export default Navbar

