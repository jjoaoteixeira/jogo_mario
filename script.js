document.addEventListener('DOMContentLoaded', () => {
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const scoreElement = document.querySelector('.score');
    const gameOverElement = document.querySelector('.game-over');
    const finalScoreElement = document.querySelector('.final-score');
    let score = 0;

    const jump = () => {
        if (!mario.classList.contains('jump')) {
            mario.classList.add('jump');

            setTimeout(() => {
                mario.classList.remove('jump');
            }, 500);
        }
    };

    document.addEventListener('keydown', jump);

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

            gameOverElement.style.display = 'block';
            finalScoreElement.textContent = `Your final score is: ${score}`;
        } else {
            score++;
            scoreElement.textContent = `Score: ${score}`;
        }
    }, 100);
});
