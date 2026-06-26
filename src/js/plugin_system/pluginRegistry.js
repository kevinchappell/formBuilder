const plugins = {};

function registerPlugin(name, definition){
    if (!name || typeof definition !== 'object'){
        console.warn(`Invalid Plugin Registration: ${name}`);
    return;
    }
    plugins[name] = definition;
}

function getAllPlugins(){
    return plugins;
}

export {registerPlugin, getAllPlugins}