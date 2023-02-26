/**
 * @param {string} name
 */
function greeting(name) {
    console.log(`Привет ${name.charAt(0).toUpperCase() + name.slice(1)}`)
}
function main() {
    let name = prompt("Введите ваше имя");
    greeting(name);
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main()
}

