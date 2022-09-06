import Breadcrumb from 'react-bootstrap/Breadcrumb';
import React from "react";
import PropTypes from "prop-types";

const FixtureBreadcrumb = ({ onCLickChange , activeItem={},  errors = {}}) => (
    <Breadcrumb>
      <Breadcrumb.Item onClick={(event) => onCLickChange("grupos",event)} active={activeItem.grupo} >
        Grupos
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={(event) => onCLickChange("octavos",event)} active={activeItem.octavos}>
        Octavos
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={(event) => onCLickChange("cuartos",event)} active={activeItem.cuartos}>
        Cuartos
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={(event) => onCLickChange("semifinal",event)} active={activeItem.semifinal}>
        Semifinal
      </Breadcrumb.Item>
      <Breadcrumb.Item onClick={(event) => onCLickChange("final",event)} active={activeItem.final}>
        Final
      </Breadcrumb.Item>
    </Breadcrumb>
);

FixtureBreadcrumb.propTypes = {
  onCLickChange: PropTypes.func.isRequired,
  activeItem: PropTypes.object,
  errors: PropTypes.object
};


export default FixtureBreadcrumb;