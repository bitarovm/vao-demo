import styled from 'styled-components';

export const StyledDogsTable = styled.div`
  width: 100%;
`;

export const StyledDogsTableLoading = styled.div`
  padding: 10px 0;
`;

export const StyledDogsTableCell = styled.div`
  flex-basis: 100%;
  padding: 10px 0;
`;

export const StyledDogsTableRowHead = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

export const StyledDogsTableRow = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;