import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    },
    name: {
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
        flex: 1
    },
    button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#E23344',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    }
})