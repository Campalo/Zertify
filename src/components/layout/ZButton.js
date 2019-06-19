import React from 'react';
import {styled} from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

const ZButton = styled(ButtonBase)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 40,
});

// Children props make it possible to write a new title in the button each time you reuse it
// Check the example in the templates page
export default function StyledComponents({children}) {
  return <ZButton>{children}</ZButton>;
}
