/**
* @file: 02-the-world-transalator.js
* @author: Alvise Spadea
* Exercise on javascript flow 
*
* Uses a function called helloWorld() that says Hi in a a language insert by the user 
* 
*/
/**
 * Function that says hello, world in different language
 * @param "l" a language code example "es" for spanish
 * @return Hello, world in the chosen language
 */
function helloWorld(l) {
    switch (l) {
        case "it":
            console.log("Ciao Mondo");
            break;
        case "es":
            console.log("Hola Mundo");
            break;
        case "fr":
            console.log("Bonjour tout le monde");
            break;
        case "de":
            console.log("Hallo Welt");
            break;
        case "jp":
            console.log("こんにちは世界");
            break;
        case "en":
            console.log("Hello World");
            break;
        default:
            console.log("Hello World");
            break;
    }
}
helloWorld();
helloWorld("it");
helloWorld("es");
helloWorld("fr");
helloWorld("de");
helloWorld("jp");
helloWorld("en");