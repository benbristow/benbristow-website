export class Snow {
    _container = document.getElementById('bb-snow');
    _animations = ['animation1', 'animation2', 'animation3', 'animation4'];

    _options = {
        font: {
            min: 25,
            max: 30
        },
        opacity: {
            min: 0.5,
            max: 1.0
        }
    };

    constructor() {
        const interval = setInterval(() => {
            this._createSnow();
        }, 250);

        setTimeout(function () {
            clearInterval(interval);
        }, 20000);
    }

    _createSnow = () => {
        const snow = document.createElement("span");

        const randomAnimation = this._animations[Math.floor(Math.random() * this._animations.length)];

        snow.className = `snow ${randomAnimation}`;
        snow.style.top = `-${this._options.font.max}px`;
        snow.style.left = `${Math.floor(Math.random() * 101)}%`;
        snow.style.fontSize = `${this._getFloorRandom(this._options.font.min, this._options.font.max)}px`;
        snow.style.opacity = this._getRandom(this._options.opacity.min, this._options.opacity.max).toFixed(1);

        this._container.appendChild(snow);
    }

    _getRandom(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    _getFloorRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}