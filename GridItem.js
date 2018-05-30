// defines properties usable by a grid item
// source: https://css-tricks.com/snippets/css/complete-guide-grid/
import styled from 'styled-components';

const GridItem = styled.div`
  align-self: ${props => props.alignSelf};
  grid-area: ${props => props.gridArea};
  grid-column-end: ${props => props.gridColumnEnd};
  grid-column-start: ${props => props.gridColumnStart};
  grid-column: ${props => props.gridColumn};
  grid-row-end: ${props => props.gridRowEnd};
  grid-row-start: ${props => props.gridRowStart};
  grid-row: ${props => props.gridRow};
  justify-self: ${props => props.justifySelf};
  place-self: ${props => props.placeSelf};
`;

export default GridItem;
