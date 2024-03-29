import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";

export const {
  styled,
  css,
  keyframes,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: `#000000`,
      white: `#ffffff`,

      green01: `#F4FFFC`,
      green02: `#F0F9F7`,
      green03: `#D2EEE7`,
      green04: `#5CD7B9`,
      green05: `#00C092`, // primary
      green06: `#0AA882`, // compo-primary-press
      green07: `#18896D`,
      green08: `#18896D`,
      green09: `#205145`,
      green10: `#114139`,
      greentext: `#00B98C`,

      // B-blue
      blue01: `#F5F9FF`,
      blue02: `#D7E6FF`,
      blue03: `#A0C5FF`,
      blue04: `#4E9EFF`,
      blue05: `#0075FF`,
      blue06: `#005AFA`,
      blue07: `#0042F1`,
      blue08: `#002CE2`,
      blue09: `#0017BB`,
      blue10: `#000773`,
      bluetext: `#0085FF`,
      // B-red
      red01: `#FFF9F9`,
      red02: `#FEF1F1`,
      red03: `#FC8A8A`,
      red04: `#EE7D7D`,
      red05: `#F85151`,
      red06: `#E84A4A`,
      red07: `#D03F3F`,
      red08: `#BA3535`,
      red09: `#9E2424`,
      red10: `#851717`,
      redtext: `#F85151`,
      // gray
      gray01: `#fbfbfb`,
      gray02: `#F5F5F5`,
      gray03: `#F0F0F0`,
      gray04: `#E5E5E5`, // gray-04
      gray05: `#D5D5D5`, // text-disabled, compo-dim
      gray06: `#BBBBBB`,
      gray07: `#999999`,
      gray08: `#777777`,
      gray09: `#555555`,
      gray10: `#333333`,
      // B-gray
      bgray01: `#F7F9F8`, // bgray-01
      bgray02: `#EEF1F1`,
      bgray03: `#D2D2D2`,
      bgray04: `#C3C8CC`,
      bgray05: `#90A29D`,
      bgray06: `#7C8986`,
      bgray07: `#697A76`,
      bgray08: `#546460`,
      bgray09: `#6E788A`,

      // icon color
      icon01: `#546460`,
      icon02: `#FFD737`,
      icon03: `#FF8C37`,
      icon04: `#BD3AFF`,
      icon05: `#FFB000`,
      icon06: `#003863`,
      icon07: `#E4032E`,
      silver: `#D4D4D4`,
      gold: `#FFD737`,
      lightBlue: `#3A95FF`,
    },

    textStyle: {
      money01: "fontSize: 20",
    },
  },
  utils: {
    mx: (number: number) => ({
      marginLeft: `${number}px`,
      marginRight: `${number}px`,
    }),

    my: (number: number) => ({
      marginTop: `${number}px`,
      marginBottom: `${number}px`,
    }),

    mb: (v: number | string) => ({
      marginBottom: v,
    }),

    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),

    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
