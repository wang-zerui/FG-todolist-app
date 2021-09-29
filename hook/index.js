async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _______  _______  ______   _______  ___      ___   _______  _______ 
    |       ||       ||      | |       ||   |    |   | |       ||       |
    |_     _||   _   ||  _    ||   _   ||   |    |   | |  _____||_     _|
      |   |  |  | |  || | |   ||  | |  ||   |    |   | | |_____   |   |  
      |   |  |  |_|  || |_|   ||  |_|  ||   |___ |   | |_____  |  |   |  
      |   |  |       ||       ||       ||       ||   |  _____| |  |   |  
      |___|  |_______||______| |_______||_______||___| |_______|  |___|  
                                        `)
    console.log(`\n    Welcome to the Huawei FunctionGraph start application
    This application requires to open these services: 
        FunctionGraph : https://console.huaweicloud.com/
    This application can help you quickly deploy the huaweicloud functionGraph project.
    The application uses FG component：
        * Help Docs  : https://github.com/xinwuyun/fg
        * Yaml Config: https://github.com/xinwuyun/fg/blob/main/docs/Others/yaml.md
    The application homepage: https://github.com/xinwuyun/start-fg\n`)
}

module.exports = {
    postInit,
    preInit
}
