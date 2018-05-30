// defines properties usable by a grid container
// source: https://css-tricks.com/snippets/css/complete-guide-grid/
import styled from 'styled-components';

const GridContainer = styled.div`
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  display: ${props => (props.inline ? 'inline-grid' : 'grid')};
  grid-auto-columns: ${props => props.gridAutoColumns};
  grid-auto-flow: ${props => props.gridAutoFlow};
  grid-auto-rows: ${props => props.gridAutoRows};
  grid-column-gap: ${props => props.gridColumnGap};
  grid-column-start: ${props => props.gridColumnStart};
  grid-gap: ${props => props.gridGap};
  grid-row-gap: ${props => props.gridRowGap};
  grid-template-areas: ${props => props.gridTemplateAreas};
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-template-rows: ${props => props.gridTemplateRows};
  grid-template: ${props => props.gridTemplate};
  grid: ${props => props.grid};
  justify-content: ${props => props.justifyContent};
  justify-items: ${props => props.justifyItems};
  place-content: ${props => props.placeContent};
  place-items: ${props => props.placeItems};
`;

export default GridContainer;
