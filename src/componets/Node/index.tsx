import { TNode } from './types'
import { useState } from 'react'
import { BiChevronUp, BiChevronDown } from 'react-icons/bi'

import { theme } from '../../styles/theme'
import {
  Wrapper,
  Header,
  Title,
  HeaderButtonWrapper,
  StatusTitle,
  Block,
  BlockText,
  BlockNumber,
  StatusWrapper,
  ArrowWrapper,
  Link,
  Indicator,
} from './elements'

export const Node = ({ id, name, blocks, link, status }: TNode) => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false)

  const headerButtonClickHandler = () => {
    setIsContentOpen(prevState => !prevState)
  }

  return (
    <Wrapper data-testid="node">
      <Header isActive={isContentOpen}>
        <div>
          <Title>{name}</Title>
          <Link href={link}>{link}</Link>
        </div>
        <HeaderButtonWrapper onClick={headerButtonClickHandler} data-testid="node-header-button">
          <StatusWrapper>
            <Indicator isActive={status} />
            <StatusTitle isActive={status}>{status ? 'online' : 'offline'}</StatusTitle>
          </StatusWrapper>
          <ArrowWrapper>
            {isContentOpen ? (
              <BiChevronUp size="22px" color={theme.colors.ICONS} />
            ) : (
              <BiChevronDown size="22px" color={theme.colors.ICONS} />
            )}
          </ArrowWrapper>
        </HeaderButtonWrapper>
      </Header>
      {isContentOpen && (
        <div data-testid="node-content">
          {blocks.map((block, index) => (
            <Block key={index}>
              <BlockNumber data-testid="node-content-block-number">
                {String(index + 1).padStart(3, '0')}
              </BlockNumber>
              <BlockText>{block}</BlockText>
            </Block>
          ))}
        </div>
      )}
    </Wrapper>
  )
}
