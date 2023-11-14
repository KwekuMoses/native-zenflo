// Define the types for your props
export interface HeaderProps {
    handleSettingsToggle: () => void;
    user: any; // Specify a more specific type if possible
    currentMode: string;
    setIsPatternModalOpen: (isOpen: boolean) => void;
}