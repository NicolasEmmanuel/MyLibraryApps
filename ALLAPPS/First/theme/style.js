import { StyleSheet } from "react-native"
import { colors } from "./colors"

export const styles = StyleSheet.create({
    content:{
        backgroundColor:colors.primary,
        padding:10,
        margin:10,
        borderRadius:10,
    },

    titre:{
        color:colors.textPrimary,
        fontSize:24,
        fontWeight:'600',
    },
})