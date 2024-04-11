import React from 'react'
import type { PropsWithChildren } from 'react'

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

type IconsProps = PropsWithChildren<{
    name: string;
}>

const Icons = ({name} : IconsProps) => {
  switch (name) {
    case 'circle':
        return <FontAwesome name="circle-thin" size={24} color="#F7CD2E" />
        break;
    case 'cross':
        return <FontAwesome name="times" size={24} color="#38CC77" />
        break;
  
    default:
      return <Ionicons name="pencil" size={38} color="#0D0D0D" />

  }
}

export default Icons