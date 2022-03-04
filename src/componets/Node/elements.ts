import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 14px;
  box-shadow: ${({ theme }) => theme.shadows.DARK};
  border-radius: 3px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Header = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ isActive }) => (isActive ? '12px' : '0')};
`

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.DARK};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.44px;
  user-select: none;
  margin-bottom: 4px;
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.DARK_TRANSPARENT};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  user-select: none;
  text-decoration: none;
`

export const HeaderButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88px;

  &:hover {
    cursor: pointer;
  }
`

export const StatusWrapper = styled.div`
  display: flex;
`

export const Indicator = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.GREEN : theme.colors.RED)};
  margin-right: 4px;
  position: relative;
  top: 5px;
`

export const StatusTitle = styled.div<{ isActive: boolean }>`
  text-transform: uppercase;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.5px;
  user-select: none;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.DARK : theme.colors.GRAY)};
`

export const ArrowWrapper = styled.div`
  & > svg {
    position: relative;
    top: -3px;
  }
`

export const Block = styled.div`
  background-color: ${({ theme }) => theme.colors.DISABLED};
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 2px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const BlockNumber = styled.div`
  color: ${({ theme }) => theme.colors.PRIMARY};
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  user-select: none;
`

export const BlockText = styled.div`
  color: ${({ theme }) => theme.colors.DARK};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.25px;
  user-select: none;
`
