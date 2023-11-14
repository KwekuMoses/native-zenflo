import React from "react";
import { View } from "react-native";
import styles from "./Header.styles";
import { HeaderProps } from "../../types/headerTypes";
import TimerTitle from "../TimerTitle/TimerTitle";
import { Text } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

function Header({ handleSettingsToggle, user, currentMode, setIsPatternModalOpen }: HeaderProps) {
    return (
        <Appbar style={styles.header}>
            <Text variant="headlineLarge" style={styles.logo}>Zenflo</Text>
            <TimerTitle currentMode={currentMode} />
            {/* This button only appears if a user is logged in */}
        </Appbar>
    );
}

export default Header;
