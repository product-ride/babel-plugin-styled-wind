import { CSSGen } from "./css-gen";
import generateStylesJS from './generateStylesJS';

let customConfig = {};

try {
    customConfig = require('../../../../styled-wind.js');
}catch (e) {
    customConfig = {}
}

export const getHydratedTemplateString = (strings) => {
    console.log("custom", customConfig);
  
    const config = generateStylesJS(customConfig);
    const cssGen = new CSSGen(config);
    const sanitizedStyles = strings.map((stringsPart) => {
      const classes = stringsPart.split(';');
      /*
        This is to handle the following case
  
        margin-top: ${(props: any) => props.margin};
       .text-yellow-900;
  
       if we don't do this then we might miss the ; from `margin-top` style
       and style wind style will be applied in the same line leading to
  
       margin-top: 20pxcolor:#fff;
      */
      if (classes[0].length === 0) {
        return [';', ...classes];
      } else {
        return classes;
      }
    });
  
    return sanitizedStyles.map((sanitizedStyle) => {
      return sanitizedStyle.map((style) => {
        return cssGen.genCSS(style.trim()).trim();
      });
    });
  };