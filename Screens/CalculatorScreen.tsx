import React from 'react'
import { Text, View } from 'react-native'
import { style } from '../theme/appTheme'
import ButtonCal from '../components/ButtonCal'

const CalculatorScreen = () => {
  return (
   <View style={style.calculatorContainer}>
        <Text style={style.smallResult}>1.500.000</Text>
        <Text style={style.result}>1.500.000</Text>


        <View style={style.row}>
           <ButtonCal text="C" color="#9B9B9B"/>
           <ButtonCal text="+/-" color="#9B9B9B"/>
           <ButtonCal text="/" color="#9B9B9B"/>
           <ButtonCal text="del" color="#FF9427"/>
        </View>

        <View style={style.row}>
           <ButtonCal text="7"/>
           <ButtonCal text="8"/>
           <ButtonCal text="9"/>
           <ButtonCal text="X" color="#FF9427"/>
        </View>
        
        <View style={style.row}>
           <ButtonCal text="4"/>
           <ButtonCal text="5"/>
           <ButtonCal text="6"/>
           <ButtonCal text="-" color="#FF9427"/>
        </View>
        <View style={style.row}>
           <ButtonCal text="1"/>
           <ButtonCal text="2"/>
           <ButtonCal text="3"/>
           <ButtonCal text="+" color="#FF9427"/>
        </View>
        <View style={style.row}>
           <ButtonCal text="0" width/>
           <ButtonCal text="."/>
           <ButtonCal text="=" color="#FF9427"/>
        </View>

   </View>
  )
}

export default CalculatorScreen
