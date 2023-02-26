function main() {
    const valueC = Number.parseFloat(prompt("Введите температуру в градусах цельсия"));
    if (Number.isFinite(valueC)) {
        const valueF = ((9 / 5) * valueC + 32);
        alert(`Цельсий:${valueC.toFixed(2)} Фаренгейт:${valueF.toFixed(2)}`);
    } else {
        alert('Не правильный ввод');
    }
}
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', main);
} else {
    main();
}

