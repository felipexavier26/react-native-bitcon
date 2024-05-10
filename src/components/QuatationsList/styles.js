import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filtres: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-evenly',
    },

    buttonQuery: {
        width: '15%',
        height: '30',
        backgroundColor: '#f50d41',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    textQuery: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default styles
