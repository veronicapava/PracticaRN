import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { style } from '../theme/appTheme'

interface Props {
    text: string;
    color?: string;
    width?: boolean;
}

const ButtonCal = ({text, color ='#2D2D2D', width = false} : Props) => {
  return (
    <TouchableOpacity>
      <View style={{
            ...style.button,
            backgroundColor: color,
            width: (width) ? 180 : 80
          }}>
              <Text style={{
                ...style.textButton,
                color: (color === '#9B9B9B') ? 'black' : 'white'

                }}>
                  {text}</Text>
      </View> 
    </TouchableOpacity>
   
  )
}

export default ButtonCal
