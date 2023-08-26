
const textarea = document.getElementById('editor');

textarea.value = localStorage.text;
textarea.oninput = () => localStorage.text = textarea.value;

const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function () {
    localStorage.clear();
});
