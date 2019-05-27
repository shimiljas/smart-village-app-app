import React, { useEffect, useState } from 'react';
import { Font } from 'expo';

import { MainApp } from './src';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'titillium-web-bold': require('./assets/fonts/TitilliumWeb-Bold.ttf'),
      'titillium-web-bold-italic': require('./assets/fonts/TitilliumWeb-BoldItalic.ttf'),
      'titillium-web-regular': require('./assets/fonts/TitilliumWeb-Regular.ttf'),
      'titillium-web-italic': require('./assets/fonts/TitilliumWeb-Italic.ttf'),
      'titillium-web-light': require('./assets/fonts/TitilliumWeb-Light.ttf'),
      'titillium-web-light-italic': require('./assets/fonts/TitilliumWeb-LightItalic.ttf')
    }).then(() => setFontLoaded(true));
  }, []);

  return fontLoaded ? <MainApp /> : null;
};

export default App;
