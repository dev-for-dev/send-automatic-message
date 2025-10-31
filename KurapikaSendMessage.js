async function sendScript(scriptText){

const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);

main = document.querySelector("#main"),

textarea = main.querySelector(`div[contenteditable="true"]`)


if(!textarea) throw new Error("Abra a conversa que será enviado a mensagem")


for(const line of lines){

console.log(line)


textarea.focus();

document.execCommand('insertText', false, line);

textarea.dispatchEvent(new Event('change', {bubbles: true}));


setTimeout(() => {

(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="wds-ic-send-filled"]`) || main.querySelector(`[data-icon="send"]`)).click();

}, 100);


if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 3000));

}


return lines.length;

}



sendScript(`



🎸🎸🎸🎶🎶🎶



Kurapika está se afogando



Em um vazio



_INDESCRITÍVEL_



Dore rodo 🎶



Yumeni furete iru 🎶



Mesashita 🎶



Monoga aruuu 🎶



Konote wa 🎶



Nani wo motometeru 🎶

`).then(e => console.log(`Todas as ${e} mensagens foram enviadas,`)).catch(console.error)
