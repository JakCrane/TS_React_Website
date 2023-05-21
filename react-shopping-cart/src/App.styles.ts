import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    margin: 40px;
`;

//can style with both methods, this is an example
export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index:2;
    right: 20px;
    top: 20px;
`;