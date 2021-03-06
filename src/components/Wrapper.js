import styled from 'styled-components/native';

import { normalize } from '../config';

export const Wrapper = styled.View`
  padding: ${normalize(14)}px;
`;

export const WrapperHorizontal = styled.View`
  padding-left: ${normalize(14)}px;
  padding-right: ${normalize(14)}px;
`;

export const WrapperRow = styled.View`
  flex-direction: row;
`;

export const WrapperWrap = styled(WrapperRow)`
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export const InfoBox = styled(WrapperRow)`
  margin-bottom: ${normalize(5)}px;
`;
