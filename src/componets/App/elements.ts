import styled from 'styled-components'

export const MainWrap = styled.div`
  max-width: 648px;
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  margin: 0 auto;
`

export const H1 = styled.h1`
  font-size: 34px;
  line-height: 40px;
  letter-spacing: 0.25px;
  color: ${({ theme }) => theme.colors.DARK};
  font-weight: 700;
`

export const NodesWrap = styled.div`
  display: flex;
  flex-direction: column;
`
