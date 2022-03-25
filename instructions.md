# Para instalar o Typescript no expo bare workflow que está sem

cria o arquivo tsconfig.json na raiz do projeto e roda expo start, 
em seguida o próprio expo pergunta se quer instalar o typescript no projeto, 
depois adiciona o strict: true

~~~javascript

"compilerOptions": {
    "strict": true
  },

~~~

# Usar Typescript no styled-components

Instala o '@types/styled-components-react-native'.


# Para criar um estilo global

- instala fonts do google (expo-font e font específica):
expo install expo-font @expo-google-fonts/inter

- instala o loading (AppLoading) para as fonts e usa o useFonts
expo install expo-app-loading

- define o arquivo de estilos globais

- no App.tsx importa as fonts e o ThemeProvider do styled-components

- se não aparecer as sugestões da tipagem no styled dos components,
cria um arquivo styled.d.ts junto do tema global para adicionar tipagem:

~~~javascript

import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    type ThemeType = typeof theme;

    export interface DefaultTheme extends ThemeType {};
}

~~~

# Para usar imagens SVG

- Instala o 'react-native-svg' para habilitar o uso.
- Instala o 'react-native-svg-transformer' para habilitar propriedades de componente.

- No arquivo metro.config.js cola as configurações:

~~~javascript

const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();

~~~

- Cria a pasta @types no src para corrigir erros de importação e tipagem com a configuração: 

~~~javascript

declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;

    export default content;
}

~~~

# Para usar tamanhos proporcionais nos itens dos componentes

- instala o pacote react-native-responsive-fontsize