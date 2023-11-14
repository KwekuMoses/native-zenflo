import React from "react";
import { View } from "react-native";
import { TimerTitleProps } from "../../types/timerTitleTypes";
import styles from "./TimerTitle.styles";
import { Text, Appbar } from 'react-native-paper';

function TimerTitle({ currentMode }: TimerTitleProps) {
    return (
        <View>
            <Text variant="displayLarge" style={styles.title}>
                {currentMode === "work" ? "Work" : currentMode === "break" ? "Break" : "Long Break"}
            </Text>
        </View>
    );
}

export default TimerTitle;
