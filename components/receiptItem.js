import {Text, View, StyleSheet, Pressable, TouchableOpacity, Alert} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const ReceiptItem = ({text, onItemDelete, id}) => {
    return(
        <View style={styles.receiptItem}>
            <Text>
                {text}
            </Text>
            <Pressable onPress={() => {
                onItemDelete(id)
            }}>
                <MaterialIcons name={'delete'} size={24} color={'red'}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    receiptItem: {
        backgroundColor: '#E6E6FAFF',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default ReceiptItem;