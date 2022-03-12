import { StyleSheet, Platform } from 'react-native';

export const colors = {
  black: "rgba(0,0,0,1)",
  white: "#FFFFFF",
  gray: "rgba(255,255,255,0.4)",
  lightgray: "rgba(255,255,255,0.7)"
};

export const common = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  horizontalContainer: {
    flex: -1,
    flexDirection: 'row',
  },
  verticalFlex: {
    flex: -1,
    flexDirection: 'column',
  },
  flexCentered: {
    flex: -1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: colors.nunitoSBold,
    color: '#FFF',
    fontWeight: '700',
    marginHorizontal: 20,
  },
  label: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500'
  },
  input: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    backgroundColor: "rgb(89, 90, 91)",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderColor: colors.lightgray,
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: "center"
  },
});
