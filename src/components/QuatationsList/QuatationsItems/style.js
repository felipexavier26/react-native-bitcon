import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: '95%',
        height: 'auto',
        backgroundColor: '#000000',
        marginLeft: '3%',
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    contentLeft: {
        width: '36%',
        height: '100%',
        alignItems: 'flex-start',
    },
    logoBitcon: {
        width: 40,
        height: 40,
        marginLeft: 2,
        borderRadius: 50,
    },
    boxLogo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dayContation: {
        fontSize: 16,
        paddingLeft: 10,
        color: '#fff',
        fontWeight: 'bold',
    },
    contentRight: {
        width: '60%',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }

});

export default styles
