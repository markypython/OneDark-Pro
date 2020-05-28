import { ThemeConfiguration } from "../models";
import { standardColors, vividColors } from "./colors";
import { editorTokens } from "./editor";
import { getSemanticTokenColors } from "./semantic-colors";
import {
  alwaysBoldTokens,
  alwaysItalicTokens,
  boldItalicTokens,
  boldTokens,
  getStandardTokens,
  italicAttributesTokens,
  italicTokens,
} from "./token-groups";

export function generateTheme(configuration: ThemeConfiguration) {
  const colors = configuration.vivid ? vividColors : standardColors;

  const tokenColors = [
    getStandardTokens(colors),
    alwaysItalicTokens,
    alwaysBoldTokens,
    configuration.italic && italicTokens,
    configuration.bold && boldTokens,
    configuration.bold && configuration.italic && boldItalicTokens,
    configuration.italicAttributes && italicAttributesTokens,
  ]
    .filter(Boolean)
    .reduce((aggregate, curr) => aggregate.concat(...curr), []);

  return {
    colors: editorTokens,
    name: "One Dark",
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors,
    type: "dark",
  };
}
