const raiz = document.querySelector("#root");

const imprimeMessage = (a, b) => {

    if (raiz.children.length < 0) {
        raiz.innerHTML = "";
    } else {
        const messageArray = [...a, `</br >`, ...b];
        for (let i = 0; i < messageArray.length; i++) {
            const element = messageArray[i];
            const span = document.createElement("span");
            span.classList.add("letter");
            span.innerHTML = element;
            raiz.appendChild(span);
        }
    }
}

const animaMessage = (a, b) => {

    imprimeMessage(a, b);

    const spans = document.querySelectorAll(".letter");

    if (raiz.children.length > 0) {
        const spans = raiz.querySelectorAll("span");
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("active");
            }, index * 100);
        });
    }

    setTimeout(() => {
        for (let i = 0; i < spans.length; i++) {
            setTimeout(() => {
                raiz.setAttribute("display", "block");
                spans[i].classList.add("fade-in");
            }, 100 * i);
        }
    }, 500);

    setTimeout(() => {
        for (let i = 0; i < spans.length; i++) {
            setTimeout(() => {
                spans[i].classList.remove("fade-in");
                spans[i].classList.add("fade-out");
            }, 100 * i);
        }
    }, 5000);
}

animaMessage("Keep calm and...", "code Javascript");
