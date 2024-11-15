// intro.js: React Component for the Intro Section
import React from 'react';
import './intro.css';
import myPhoto from './images/ayoob.jpg'; // Adjust the path according to where the image is stored

function Intro() {
    return (
        <div className="intro-container">
            <h1 className="intro-header">Ayoob Al-Delaimy</h1>
            <img src={myPhoto} alt="Ayoob smiling" style={{ width: '150px', borderRadius: '50%' }} />
            <p>
                Hi, I’m <span className="intro-highlight">Ayoob</span>—a junior at UC San Diego majoring in Computer Engineering. Over the past few years, I’ve accumulated extensive hands-on experience in software development, research, and leadership.
            </p>

            <h2>Professional Experiences</h2>
            <ul>
                <li><strong>San Diego Supercomputer Center, Intern (Nov 2023 - Present)</strong>: Contributed to customer-driven projects involving advanced software programming, mobile apps, and web development, honing problem-solving and collaboration skills.</li>
                <li><strong>SASTA, Webmaster (Jul 2022 - Present)</strong>: Led website development from concept to execution, showcasing technical expertise and leadership while troubleshooting and ensuring smooth operations.</li>
                <li><strong>AUB Media, Founder/CEO (Dec 2022 - Sep 2024)</strong>: Founded a creative agency, crafted unique strategies, and achieved significant client success with 150M+ views and $250k+ profit. Mentored aspiring entrepreneurs.</li>
                <li><strong>UC San Diego Jacobs School of Engineering, Intern (Jan 2021 - Jan 2022)</strong>: Built and programmed a robotic arm for Nanoengineering research, overcoming hardware and software challenges with minimal supervision.</li>
            </ul>

            <h2>Skills and Achievements</h2>
            <ul>
                <li><strong>Top Skills</strong>: Brand Strategy, Digital Marketing, Content Creation</li>
                <li><strong>Languages</strong>: English (Native/Bilingual), Arabic (Native/Bilingual)</li>
                <li><strong>Awards</strong>: 2nd place in the Computer Science section of the Greater San Diego Science and Engineering Fair</li>
            </ul>
        </div>
    );
}

export default Intro;
