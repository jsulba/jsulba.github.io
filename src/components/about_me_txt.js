import conc from '../assets/concordia.jpg';
import van from '../assets/vanier.jpg';
import journey from '../assets/journey.png';
import look from '../assets/look.png';
import hobbies from '../assets/hobbies.png';
import prog from '../assets/progress.png';
import frisbee from '../assets/Screenshot_20200825-224033_Video Player.jpg';


let paragraphs = [];
export default paragraphs = [
    {
        title: "A Brief Look",
        text: "I am a student at Concordia University, and I am pursuing my Bachelor's of Computer Science. I am always challenging myself and looking for opportunities to learn more about the vast domain of computer science and to connect with people who have a drive to accomplish something great. Let's not forget to have fun either!",
        images: [look, conc]
    },
    {
        title: "My Journey So Far",
        text: "I started my career in Computer Science when I enrolled in CEGEP Vanier College in the Computer Science and Math program. Once I started developing and solving small problems, I knew it was my calling. I graduated from Vanier having been someone who was very involved with the community and excelled in nearly every subject. I am still proud of the efforts I put in to founding the Vanier Coding Club, which brought the people of my program and many other curious students together, in a community of diverse and motivated learners.",
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