import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { Flex } from "antd";

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Flex>
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            <div
                style={{
                    transition: ".3s",
                    marginLeft: collapsed ? "80px" : "258px",
                    width: "100%"
                }}
            >
                <Outlet />
            </div>
        </Flex>
    );
};

export default DashboardLayout;
