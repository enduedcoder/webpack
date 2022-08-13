import generateJoke from './generateJoke';
import './styles/main.scss';
import laughing from '../src/assets/laughing.svg';

const laughingImage = document.getElementById('laughing-img');
laughingImage.src = laughing;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);
generateJoke();
