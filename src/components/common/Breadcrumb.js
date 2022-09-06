import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from "react";

function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => console.log("asdasd")} active={true} >Home</Breadcrumb.Item>
      <Breadcrumb.Item active={false}>
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active={false}>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;