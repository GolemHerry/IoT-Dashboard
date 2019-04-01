import React from 'react';
import { Sidenav, Nav, Toggle, Dropdown, Icon } from 'rsuite';

export default class Sidebar extends React.Component {
    constructor() {
      super();
      this.state = {
        expanded: true,
        activeKey: '1'
      };
      this.handleToggle = this.handleToggle.bind(this);
      this.handleSelect = this.handleSelect.bind(this);
    }
    handleToggle() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
    handleSelect(eventKey) {
      this.setState({
        activeKey: eventKey
      });
    }
    render() {
      const { expanded } = this.state;
  
      return (
        <div style={{ width: 250 }}>
          <Toggle onChange={this.handleToggle} checked={expanded} />
          <hr />
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={['3', '4']}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                  控制台
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                  用户
                </Nav.Item>

                <Dropdown
                  placement="rightTop"
                  eventKey="0"
                  title="管理"
                  icon={<Icon icon="spinner" />}
                >
                  <Dropdown.Item eventKey="0-1">服务器</Dropdown.Item>
                  <Dropdown.Item eventKey="0-2">网关</Dropdown.Item>
                  <Dropdown.Item eventKey="0-3">节点</Dropdown.Item>
                </Dropdown>

                <Dropdown
                  placement="rightTop"
                  eventKey="3"
                  title="高级"
                  icon={<Icon icon="magic" />}
                >
                  <Dropdown.Item eventKey="3-1">连接信息</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">应用</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">数据</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">通道</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  placement="left"
                  eventKey="4"
                  title="设置"
                  icon={<Icon icon="gear-circle" />}
                >
                  <Dropdown.Item eventKey="4-1">设备注册</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">EMQ</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">版本</Dropdown.Item>
                  <Dropdown.Menu eventKey="4-5" title="其他">
                    <Dropdown.Item eventKey="4-5-1">关于</Dropdown.Item>
                    <Dropdown.Item eventKey="4-5-2">赞助</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>
      );
    }
  }

