import { StyleSheet } from "react-native";

 export const style = StyleSheet.create({
    background: { 
        flex: 1, 
        backgroundColor: 'black'
    },
    result: {
        color: "white", 
        fontSize:60, 
        textAlign:'right'
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)', 
        fontSize:30, 
        textAlign:'right'
    },
    calculatorContainer: { 
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    row: {
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:18,
        paddingHorizontal:10
    },
    button:{
        height:80,
        width:80,
        backgroundColor: '#2D2D2D',
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:10
    },
    textButton: {
        textAlign:'center',
        color: 'white',
        padding:10,
        fontSize:30,
        fontWeight: 'bold'
    }
})