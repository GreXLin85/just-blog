export interface SearchBoxProps {
    value?: string;
    placeholder?: "Search Blog";
    onChange?: (value: string) => void;
}