import { StyleSheet } from "react-native";
import metrics from './metrics';
import colors from './colors';

export { metrics, colors };

const entryBorderRadius = 8;

const Slider = StyleSheet.create({
    slider: {
        overflow: 'visible'
    }
});

const Pagination = StyleSheet.create({
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});

const Layout = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    containerWithPadding: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 16
    },
});

const Gradient = StyleSheet.create({
    gradientAbsoluteFill: {
        ...StyleSheet.absoluteFillObject
    },
});

const Select = StyleSheet.create({
    Select: {
        maxHeight:400,
        paddingHorizontal: 16,
        borderTopColor: colors.white,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderBottomColor: colors.white,
        borderRadius: 8
    },
    SelectModal: {
        borderTopColor: colors.primaryColor,
        borderBottomColor: colors.primaryColor,
    },
    SelectItem: {
        backgroundColor: colors.white,
        padding: 16,
        paddingHorizontal: 24,
        marginVertical: 4,
        borderRadius: 32,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    SelectItemModal: {
        backgroundColor: colors.primaryColor,
        color: colors.white
    }
});

const Button = StyleSheet.create({
    PlayButton: {
        justifyContent: 'center',
        backgroundColor: colors.red,
        height: 70,
        width: 70,
        borderRadius: 48,
        elevation: 10
    },
    ExersicePlayButtonWrapper: {
        backgroundColor: colors.secondaryColor,
        height: 200,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 96,
        elevation: 10
    }
});

const Heading = StyleSheet.create({
    H1: {
        fontSize: 72,
        fontFamily: 'Meditation',
        letterSpacing: 8
    },
    H2: {
        fontSize: 48,
        fontFamily: 'Meditation',
        letterSpacing: 4
    },
    P: {
        color: colors.subText
    }
});

const Loader = StyleSheet.create({
    LoadingWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default { Layout, Slider, Pagination, Gradient, Select, Button, Heading, Loader }
