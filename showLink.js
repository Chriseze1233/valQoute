
const copyin = document.querySelector('#copyin');
const linkCont = document.querySelector('.link-text');

function copyLink() {
    let inputLink = document.querySelector("#inp");
    inputLink.select();
    document.execCommand('copy');
};

copyin.addEventListener('click', () => {
    copyLink();
    window.getSelection().removeAllRanges();
    linkCont.style.display = 'block';
})
