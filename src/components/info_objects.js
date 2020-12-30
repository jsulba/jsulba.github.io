import conc from '../assets/concordia.jpg';
import van from '../assets/vanier.jpg';
import journey from '../assets/journey.png';
import look from '../assets/look.png';
import hobbies from '../assets/hobbies.png';
import prog from '../assets/progress.png';
import qt from '../assets/quantum_sim.PNG';
import soul from '../assets/soultunes.JPG';
import pmg from '../assets/physics_mini_games.JPG';
import port from '../assets/portfolio.png';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';
import comp from '../assets/computer.jpg';
import scs from '../assets/Profile.png';
import skate from '../assets/skate.jpg';
import jq from '../assets/jquery.png';
import jqui from '../assets/jqui.png';
import ang from '../assets/angular.png';
import react from '../assets/react.png'; 
import java from 'programming-languages-logos/src/java/java_64x64.png';
import html from 'programming-languages-logos/src/html/html_64x64.png';
import css from 'programming-languages-logos/src/css/css_64x64.png';
import js from 'programming-languages-logos/src/javascript/javascript_64x64.png';
import ts from 'programming-languages-logos/src/typescript/typescript_64x64.png';
import py from 'programming-languages-logos/src/python/python_64x64.png';
import cpp from 'programming-languages-logos/src/cpp/cpp.png';

export default class InfoObjects{}

export const paragraphs = [
    {
        title: "A Brief Look",
        text: "I'm currently studying at Concordia University where I'm working towards my Bachelor's Degree in Computer Science. I'm always challenging myself and looking for opportunities to learn more technologies and to connect with people who have a drive to accomplish something great. That's why I'm currently involved in the Software Engineering and Computer Science Society at Concordia, as their Vice President of Internal Affairs - more about that later! Moreover, as you may have noticed, I'm already fairly familiar with a few languages like Java, JavaScript, TypeScript. I also have experience with frameworks like JQuery, Angular, and React. I have dabbled in other languages like Python, PHP, SQL, and C++, but I haven't quite implemented any notable projects with these.",
        images: [look, conc]
    },
    {
        title: "My Journey So Far",
        text: "I started my career in Computer Science when I enrolled in CEGEP Vanier College in the Computer Science and Math program. As soon as I started developing with Java and solving small problems, as problem a solver at heart, I knew it was something I wanted to get better at. I graduated from Vanier having been someone who was very involved with the school community and excelled in nearly every subject. I am still proud of the efforts I put in to founding the Vanier Coding Club, which brought the people of my program and many other curious students together, in a community of diverse and motivated learners.",
        images: [journey, van]
    },
    {
        title: "Goals & Progress",
        text: "One of my goals for my time at Concordia University is to meet good people and involve myself in a community that will bring the best out of me. So far, I've made a considerable leap by joining the Software Engineering and Computer Science Society (SCS) as their Computer Science First Year Representative. More information to come.",
        images: [prog, conc]
    },
    {
        title: "Hobbies & Interests",
        text: "I love playing sports! The problem with Montreal is that half of the year, it's too snowy to play Ultimate Frisbee or Football (Soccer). During that time, I play competitive and challenging video games (games that are also considered eSports). More information to come.",
        images: [hobbies, frisbee]
    }
];

export const projects = [
    {cat: "Website", title: "Portfolio Website", desc: "A home for everything me...", img: port, feat: true},
    {cat: "Simulation", title: "Quantum Sim", desc: "A simulation for a quantum computer...", img: qt, feat: true},
    {cat: "Applet", title: "Soultunes", desc: "App for listening to tunes based on the weather...", img: soul, feat: false},
    {cat: "Game", title: "Physics Mini Games", desc: "A game for teaching physics...", img: pmg, feat: false}
];

export const about_images = [conc, van, scs, comp];

export const toolset = [jq, css, jqui, html, js, java, ts, react, ang, py, cpp];

export const featured = [
    {cat: "About Me", title: "Software Student", desc: "Pursuing a Bachelor of Computer Science at Concordia University.", img: conc},
    {cat: "Projects", title: "Quantum Sim", desc: "A simulation for a quantum computer.", img: qt},
    {cat: "Projects", title: "Portfolio", desc: "The making of this very same app.", img: port}
  ];