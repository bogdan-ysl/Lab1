import React, { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';


const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleInputChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput3(e.target.value);
  };

  const handleButtonClick = () => {
    console.log('Input 1:', input1);
    console.log('Input 2:', input2);
    console.log('Input 3:', input3);
    alert('Button clicked!');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Item 1</Menu.Item>
          <Menu.Item key="2">Item 2</Menu.Item>
          <Menu.Item key="3">Item 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.SubMenu key="sub1" title="Submenu">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Form>
              <Form.Item label="Input 1">
                <Input value={input1} onChange={handleInputChange1} />
              </Form.Item>
              <Form.Item label="Input 2">
                <Input value={input2} onChange={handleInputChange2} />
              </Form.Item>
              <Form.Item label="Input 3">
                <Input value={input3} onChange={handleInputChange3} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={handleButtonClick}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
            <Card title="Card Title" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
