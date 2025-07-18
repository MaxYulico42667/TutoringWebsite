function copyText(text, event) {
    navigator.clipboard.writeText(text).then(() => {
        const msg = document.getElementById('copyMessage');
        const rect = event.target.getBoundingClientRect();

        msg.style.top = (rect.top -30 + window.scrollY) + 'px';
        msg.style.left = (rect.left + rect.width / 2 - msg.offsetWidth / 2 + window.scrollX) + 'px';

        msg.classList.add('show');

        setTimeout(() => {
            msg.classList.remove('show');
        }, 1500)
    });
}