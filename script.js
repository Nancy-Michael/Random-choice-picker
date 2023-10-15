const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();
textarea.addEventListener('keyup', (e) => {
    creatTag(e.target.value)
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect();
    }
});

function creatTag(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());

    tagsEl.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerHTML = tag;
        tagsEl.append(tagEl);
    });
};

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandom();
        highligh(randomTag);
        setTimeout(() => {
            unHighligh(randomTag);
        }, 100)
    }, 100)
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandom();
            highligh(randomTag);
        }, 100)
    }, times * 100);
}

function pickRandom() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highligh(tag) {
    tag.classList.add('highligh');
}
function unHighligh(tag) {
    tag.classList.remove('highligh');
}
