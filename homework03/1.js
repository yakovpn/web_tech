function main() {
    let value = prompt("Введите температуру в градусах цельсия");
    if (String(parseFloat(value)) === String(value)) {
        value = parseFloat(value)
        alert(`Цельсий:${Math.round(value * 100) / 100} Фаренгейт:${Math.round(((9 / 5) * value + 32) * 100) / 100}`);
    } else {
        alert('Не правильный ввод');
    }
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

