import React from 'react'
import CalculatorScreen from './Screens/CalculatorScreen'
import { SafeAreaView, StatusBar } from 'react-native'
import { style } from './theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={style.background}>
      <StatusBar backgroundColor="black"/>
      <CalculatorScreen/>
    </SafeAreaView>
   
  )
}

export default App
