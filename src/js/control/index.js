import '../../js/plugin_system/pluginLoader';

import controlAutocomplete from './autocomplete';
import controlButton from './button';
import controlCustom from './custom';
import controlHidden from './hidden';
import controlParagraph from './paragraph';
import controlSelect from './select';
import controlText from './text';
import controlTextarea from './textarea';
import controlTinymce from './textarea.tinymce';
import controlQuill from './textarea.quill';

import { getAllPlugins } from '../plugin_system/pluginRegistry';

const baseControls = {
  text: controlText,
  paragraph: controlParagraph,
  textarea: controlTextarea,
  number: controlText, 
};

const pluginControls = {};
const allPlugins = getAllPlugins();


Object.entries(allPlugins).forEach(([name, pluginObj]) => {
  if (pluginObj.type === 'control' && typeof pluginObj.plugin === 'function') {
    const controlClass = pluginObj.plugin(baseControls);
    pluginControls[name] = controlClass;
    console.log(`Plugin control loaded: ${name}`);
  }
});


export default {
  controlAutocomplete,
  controlButton,
  controlCustom,
  controlHidden,
  controlParagraph,
  controlSelect,
  controlText,
  controlTextarea,
  controlTinymce,
  controlQuill,
  ...pluginControls 
};
