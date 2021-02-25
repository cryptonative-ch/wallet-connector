export default theme;
declare namespace theme {
    export namespace fonts {
        export const defaultSize: string;
        export const defaultLineHeight: string;
        export const fontFamily: string;
        export const fontFamilyCode: string;
    }
    export namespace buttonPrimary {
        export const backgroundColor: string;
        export const backgroundColorDisabled: string;
        export const borderColor: string;
        export const borderColorDisabled: string;
        export const backgroundColorHover: string;
        export const borderColorHover: string;
        export const color: string;
        export const colorDisabled: string;
        export const colorHover: string;
    }
    export namespace buttonPrimaryLine {
        const backgroundColor_1: string;
        export { backgroundColor_1 as backgroundColor };
        const backgroundColorDisabled_1: string;
        export { backgroundColorDisabled_1 as backgroundColorDisabled };
        const backgroundColorHover_1: string;
        export { backgroundColorHover_1 as backgroundColorHover };
        const borderColor_1: string;
        export { borderColor_1 as borderColor };
        const borderColorDisabled_1: string;
        export { borderColorDisabled_1 as borderColorDisabled };
        const borderColorHover_1: string;
        export { borderColorHover_1 as borderColorHover };
        const color_1: string;
        export { color_1 as color };
        const colorDisabled_1: string;
        export { colorDisabled_1 as colorDisabled };
        const colorHover_1: string;
        export { colorHover_1 as colorHover };
    }
    export namespace buttonSecondary {
        const backgroundColor_2: string;
        export { backgroundColor_2 as backgroundColor };
        const backgroundColorDisabled_2: string;
        export { backgroundColorDisabled_2 as backgroundColorDisabled };
        const backgroundColorHover_2: string;
        export { backgroundColorHover_2 as backgroundColorHover };
        const borderColor_2: string;
        export { borderColor_2 as borderColor };
        const borderColorDisabled_2: string;
        export { borderColorDisabled_2 as borderColorDisabled };
        const borderColorHover_2: string;
        export { borderColorHover_2 as borderColorHover };
        const color_2: string;
        export { color_2 as color };
        const colorDisabled_2: string;
        export { colorDisabled_2 as colorDisabled };
        const colorHover_2: string;
        export { colorHover_2 as colorHover };
        export const weight: string;
    }
    export namespace buttonSecondaryLine {
        const backgroundColor_3: string;
        export { backgroundColor_3 as backgroundColor };
        const backgroundColorDisabled_3: string;
        export { backgroundColorDisabled_3 as backgroundColorDisabled };
        const backgroundColorHover_3: string;
        export { backgroundColorHover_3 as backgroundColorHover };
        const borderColor_3: string;
        export { borderColor_3 as borderColor };
        const borderColorDisabled_3: string;
        export { borderColorDisabled_3 as borderColorDisabled };
        const borderColorHover_3: string;
        export { borderColorHover_3 as borderColorHover };
        const color_3: string;
        export { color_3 as color };
        const colorDisabled_3: string;
        export { colorDisabled_3 as colorDisabled };
        const colorHover_3: string;
        export { colorHover_3 as colorHover };
    }
    export namespace dropdown {
        export const buttonBackgroundColor: string;
        export const buttonBackgroundColorHover: string;
        export const buttonBorderColor: string;
        export const buttonBorderColorHover: string;
        export const buttonBorderColorActive: string;
        export const buttonColor: string;
        export const buttonColorHover: string;
        export namespace dropdownItems {
            const backgroundColor_4: string;
            export { backgroundColor_4 as backgroundColor };
            const borderColor_4: string;
            export { borderColor_4 as borderColor };
            export const borderRadius: string;
            export const boxShadow: string;
            export namespace item {
                const backgroundColor_5: string;
                export { backgroundColor_5 as backgroundColor };
                export const backgroundColorActive: string;
                const backgroundColorHover_4: string;
                export { backgroundColorHover_4 as backgroundColorHover };
                const color_4: string;
                export { color_4 as color };
            }
        }
    }
    export namespace buttonCircle {
        export const dimensions: string;
    }
    export namespace buttonRound {
        const borderRadius_1: string;
        export { borderRadius_1 as borderRadius };
        export const fontSize: string;
        export const height: string;
        export const lineHeight: string;
        export const padding: string;
    }
    export namespace colors {
        export const activeListItemBackground: string;
        export const alert: string;
        export const alertHover: string;
        export const borderColorDark: string;
        export const darkGray: string;
        export const error: string;
        export const gray: string;
        export const green: string;
        export const mainBodyBackground: string;
        export const primary: string;
        export const primaryLight: string;
        export const hyperlink: string;
        export const secondary: string;
        export const tertiary: string;
        export const tertiaryDark: string;
        export const textColor: string;
        export const textColorDark: string;
        export const textColorDarker: string;
        export const textColorLight: string;
        export const textColorLighter: string;
        export const textColorLightish: string;
        export const verticalDivider: string;
        export const clickable: string;
        export const red: string;
    }
    export namespace message {
        const colors_1: {
            error: string;
            default: string;
            ok: string;
            warning: string;
        };
        export { colors_1 as colors };
    }
    export namespace cards {
        const backgroundColor_6: string;
        export { backgroundColor_6 as backgroundColor };
        export const border: string;
        const borderRadius_2: string;
        export { borderRadius_2 as borderRadius };
        const boxShadow_1: string;
        export { boxShadow_1 as boxShadow };
        export const paddingHorizontal: string;
        export const paddingVertical: string;
        const textColor_1: string;
        export { textColor_1 as textColor };
        export const textColorSecondary: string;
        export const titleColor: string;
    }
    export namespace header {
        const backgroundColor_7: string;
        export { backgroundColor_7 as backgroundColor };
        const boxShadow_2: string;
        export { boxShadow_2 as boxShadow };
        const height_1: string;
        export { height_1 as height };
        const color_5: string;
        export { color_5 as color };
    }
    export namespace themeBreakPoints {
        export const lg: string;
        export const md: string;
        export const sm: string;
        export const xl: string;
        export const xs: string;
        export const xxl: string;
        export const xxxl: string;
    }
    export namespace borders {
        export const tooltip: string;
        const borderColor_5: string;
        export { borderColor_5 as borderColor };
        export const borderDisabled: string;
        export const borderLineDisabled: string;
        export const commonBorderRadius: string;
    }
    export namespace slider {
        export const idle: string;
        export const active: string;
    }
    export namespace paddings {
        export const mainPadding: string;
    }
    export namespace textfield {
        const backgroundColor_8: string;
        export { backgroundColor_8 as backgroundColor };
        const borderColor_6: string;
        export { borderColor_6 as borderColor };
        export const borderColorActive: string;
        export const borderColorOnHover: string;
        const borderRadius_3: string;
        export { borderRadius_3 as borderRadius };
        export const borderStyle: string;
        export const borderWidth: string;
        const color_6: string;
        export { color_6 as color };
        const fontSize_1: string;
        export { fontSize_1 as fontSize };
        export const fontWeight: string;
        const height_2: string;
        export { height_2 as height };
        export const outline: string;
        const paddingHorizontal_1: string;
        export { paddingHorizontal_1 as paddingHorizontal };
        const paddingVertical_1: string;
        export { paddingVertical_1 as paddingVertical };
        export const placeholderColor: string;
        export const placeholderFontSize: string;
        export const placeholderFontWeight: string;
    }
    export namespace mainContainer {
        export const maxWidth: string;
    }
    export namespace moreMenu {
        export const buttonBorder: string;
        export const buttonBorderHover: string;
        export const buttonBorderActive: string;
        const boxShadow_3: string;
        export { boxShadow_3 as boxShadow };
        export namespace items {
            const border_1: string;
            export { border_1 as border };
            const backgroundColor_9: string;
            export { backgroundColor_9 as backgroundColor };
        }
        export namespace item_1 {
            const backgroundColor_10: string;
            export { backgroundColor_10 as backgroundColor };
            const backgroundColorActive_1: string;
            export { backgroundColorActive_1 as backgroundColorActive };
            const backgroundColorHover_5: string;
            export { backgroundColorHover_5 as backgroundColorHover };
            const color_7: string;
            export { color_7 as color };
            const colorHover_4: string;
            export { colorHover_4 as colorHover };
        }
        export { item_1 as item };
    }
    export namespace form {
        export namespace common {
            export namespace disabled {
                const backgroundColor_11: string;
                export { backgroundColor_11 as backgroundColor };
                const borderColor_7: string;
                export { borderColor_7 as borderColor };
                const color_8: string;
                export { color_8 as color };
            }
        }
    }
    export namespace outcomes {
        const colors_2: {
            darker: string;
            medium: string;
        }[];
        export { colors_2 as colors };
    }
    export namespace modalStyle {
        export namespace content {
            const backgroundColor_12: string;
            export { backgroundColor_12 as backgroundColor };
            const borderColor_8: string;
            export { borderColor_8 as borderColor };
            const borderStyle_1: string;
            export { borderStyle_1 as borderStyle };
            const borderWidth_1: string;
            export { borderWidth_1 as borderWidth };
            export const bottom: string;
            const boxShadow_4: string;
            export { boxShadow_4 as boxShadow };
            export const display: string;
            export const flexDirection: string;
            export const flexGrow: string;
            const height_3: string;
            export { height_3 as height };
            export const left: string;
            export const margin: string;
            export const overflow: string;
            export const position: string;
            export const right: string;
            export const top: string;
            export const width: string;
            const padding_1: string;
            export { padding_1 as padding };
        }
        export namespace overlay {
            export const alignItems: string;
            const backgroundColor_13: string;
            export { backgroundColor_13 as backgroundColor };
            const display_1: string;
            export { display_1 as display };
            export const justifyContent: string;
            const overflow_1: string;
            export { overflow_1 as overflow };
            const padding_2: string;
            export { padding_2 as padding };
            export const zIndex: string;
        }
    }
    export namespace switchNetworkModal {
        const backgroundColor_14: string;
        export { backgroundColor_14 as backgroundColor };
        export const modalColor: string;
        const borderColor_9: string;
        export { borderColor_9 as borderColor };
        const boxShadow_5: string;
        export { boxShadow_5 as boxShadow };
        export const primaryTextColor: string;
        export const secondaryTextColor: string;
        export const linkTextColor: string;
        export const connectionBall: string;
        export const primaryFontSize: string;
        export const secondaryFontSize: string;
    }
    export namespace progressBar {
        export const open: string;
        export const finalizing: string;
        export const arbitration: string;
        export const closed: string;
    }
    export namespace scale {
        export const bar: string;
        export const box: string;
        export const ballBorder: string;
        export const ballBackground: string;
        const border_2: string;
        export { border_2 as border };
        export const positive: string;
        export const negative: string;
        export const neutral: string;
        export const positiveText: string;
        export const negativeText: string;
    }
}
