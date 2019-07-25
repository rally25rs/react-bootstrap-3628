import React from 'react';
import {OverlayTrigger, Tooltip as BsTooltip} from 'react-bootstrap';

let tooltipId = 1;

export default function Tooltip(props) {
  const {message, children, ...rest} = props;

  return (
    <OverlayTrigger
      container={document.body}
      overlay={
        <BsTooltip id={`tooltip-${tooltipId++}`} {...rest}>
          {message}
        </BsTooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );
}
