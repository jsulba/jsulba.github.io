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
        text: "I'm currently studying at Concordia University where I'm working towards my Bachelor's Degree in Computer Science. I'm always challenging myself and looking for opportunities to learn more technologies and to connect with people who have a drive to accomplish something great. That's why I'm currently involved in the Software Engineering and Computer Science Society at Concordia (SCS Concordia), as their Vice President of Internal Affairs - you can check out the society in the link at the bottom of the page! As you may have noticed, I'm already fairly familiar with a few languages like Java, JavaScript, and C++. I also have experience with frameworks like JQuery, Angular, and React. Other than that, I've dabbled in other languages like Ruby, C, Lisp, Python, PHP and SQL, but I haven't quite implemented any notable projects with these yet.",
        images: [look, conc]
    },
    {
        title: "My Journey So Far",
        text: "I started my career in Computer Science when I enrolled in CEGEP Vanier College in the Computer Science and Math program. As soon as I started developing with Java and solving small problems, I knew it was something I wanted to get better at - after all I love problem solving. I graduated from Vanier as someone who was very involved with the school community and excelled in nearly every subject. One of my personal efforts consisted of founding a coding club - aptly named the Vanier Coding Club - and I am still proud of what I did. Although the club lost touch after graduation, I was able to bring the people of my program and many other curious students together in a community of diverse and motivated learners. Ultimately, we weren't able to accomplish anything big, but I was happy to learn alongside a wonderful little community.",
        images: [journey, van]
    },
    {
        title: "Goals & Progress",
        text: "I've set a few goals for myself to accomplish while I'm at Concordia, and one of them is to meet good-willed people and involve myself in a community that will bring the best out of me. So far, I'm on the right track with my position in SCS as their Computer Science First Year Representative. Before the pandemic, I also took some time to go to workshops and networking events, and it really was one of the highlights of my first semesters. I met a lot of different, talented, kind, and smart people that I know will acomplish good things, and that I hope to work with eventually. My overarching goal is to learn as much as I can - I want to be a good programmer, but I also want to develop good habits and be \"life smart\"! That's why I'm taking my time to get involved, try competitions, and start doing projects on the side.",
        images: [prog, conc]
    },
    {
        title: "Hobbies & Interests",
        text: "I love playing sports! The problem with Montreal is that half of the year, it's too snowy to do any of my favorite sports, like Ultimate Frisbee or Skateboarding. Both sports have very different people associated to them, but I love both communities! During the winter downtime, I usually take the extra time to indulge in competitive and or challenging video games. I also started producing content around this, and I hope to expand on it in the future!",
        images: [hobbies, frisbee]
    }
];

export const projects = [
    {cat: "Website", title: "Portfolio Website", desc: "A home for everything me...", img: port, feat: true},
    {cat: "Simulation", title: "Quantum Sim", desc: "A simulation for a quantum computer...", img: qt, feat: true},
    {cat: "Applet", title: "Soultunes", desc: "App for listening to tunes based on the weather...", img: soul, feat: false},
    {cat: "Game", title: "Physics Mini Games", desc: "A game for teaching physics...", img: pmg, feat: false}
];

export const about_images = [conc, van, scs, skate, comp];

export const toolset = [jq, css, jqui, html, js, java, ts, react, ang, py, cpp];

export const featured = [
    {cat: "About Me", title: "Software Student", desc: "Pursuing a Bachelor of Computer Science at Concordia University.", img: conc},
    {cat: "Projects", title: "Quantum Sim", desc: "A simulation for a quantum computer.", img: qt},
    {cat: "Projects", title: "Portfolio", desc: "The making of this very same app.", img: port}
  ];