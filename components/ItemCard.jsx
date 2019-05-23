import React from 'react'

import styled from 'styled-components'
import { Card } from 'rebass'

const ItemCard = styled(Card)`
& {
  box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
  transition: all .5s ease;
}
`

export default ItemCard