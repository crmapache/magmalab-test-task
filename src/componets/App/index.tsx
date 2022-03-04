import React from 'react'

import { nodes } from './data'
import { Node } from '../Node'
import { MainWrap, H1, NodesWrap } from './elements'

export const App = () => {
  return (
    <MainWrap>
      <H1>Nodes</H1>
      <NodesWrap>
        {nodes.map(node => (
          <Node {...node} key={node.id} />
        ))}
      </NodesWrap>
    </MainWrap>
  )
}
