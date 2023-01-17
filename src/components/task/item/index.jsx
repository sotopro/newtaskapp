import React from "react";
import { TouchableOpacity, Text } from 'react-native'
import { styles } from "./styles";

const TaskItem = ({ item, onHandlerModal }) => {
    return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerModal(item)}>
      <Text style={styles.itemList}>{item.value}</Text>
    </TouchableOpacity>
    )
}

export default TaskItem;