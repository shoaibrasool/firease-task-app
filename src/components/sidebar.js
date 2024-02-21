import React, { useState } from 'react';
import {
    ContainerOutlined,
    DesktopOutlined,
    ArrowLeftOutlined,
    ArrowRightOutlined,
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import { Button, ConfigProvider, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}



const items = [
    getItem('Home', '1', <PieChartOutlined />),
    getItem('About', '2', <DesktopOutlined />),
    getItem('Blogs', '3', <ContainerOutlined />),
];

const Sidebar = ({ collapsed, setCollapsed }) => {
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('firebaseToken');
        navigate('/login')
    }

    const handleMenuClick = (event) => {
        if (event.key === '1') {
            navigate('/')
        }
        if (event.key === '2') {
            navigate('/about')
        }
        if (event.key === '3') {
            navigate('/blog')
        }
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 0,
                width: collapsed ? 80 : 256,
                background: '#001529',
                transition: 'width 0.3s',
                zIndex: 1000,
                overflowY: 'auto',
            }}
        >
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#00b96b',
                        borderRadius: 2
                    },
                }}
            >
                <Button
                    type="primary"
                    onClick={toggleCollapsed}
                    style={{
                        marginBottom: 16,
                        marginLeft: "5px",
                        display: "block",
                    }}
                >
                    {collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
                </Button>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={handleMenuClick} // Attach onClick handler
                // <div style={{ display: "flex", justifyContent: "space-between", paddingInline: "5px", flexWrap: "wrap" }}>

                />
                <Button
                    type="primary"
                    onClick={logout}
                    style={{
                        marginLeft: "5px",
                        marginBottom: 16,
                        display: "block",
                    }}
                >
                    {collapsed ? <LogoutOutlined /> : "LogOut"}
                </Button>
            </ConfigProvider >
        </div >
    );
};

export default Sidebar;


