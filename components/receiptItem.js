import {Text, View, StyleSheet, Pressable, TouchableOpacity, Alert} from "react-native";
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const ReceiptItem = ({text, onItemDelete, id, onItemUpdate}) => {
    return(
        <View style={styles.receiptItem}>
            <Text>
                {text}
            </Text>
            <View style={styles.ItemButtons}>
                <Pressable onPress={() => onItemUpdate(text, id)} style={{paddingRight: 10}}>
                    <Ionicons name={'ios-pencil'} size={24} color={'black'}/>
                </Pressable>
                <Pressable onPress={() => {
                    onItemDelete(id)
                }}>
                    <MaterialIcons name={'delete'} size={24} color={'red'}/>
                </Pressable>
            </View>
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
    },
    ItemButtons: {
        display: "flex",
        flexDirection: 'row'
    }
})

export default ReceiptItem;