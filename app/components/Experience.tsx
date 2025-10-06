'use client';

import { useRef } from 'react';
import { animate } from 'animejs';

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  points: string[];
}

export default function Experience() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const ballRefs = useRef<(HTMLElement | null)[]>([]);

  const experiences: ExperienceItem[] = [
    {
      title: 'Developer Relations',
      company: 'Bitquery',
      date: 'June 2024 – Present',
      location: 'Remote',
      points: [
        'Created custom SDKs for clients wanting to use Bitquery solutions to make the overall development process easier.',
        'Regularly updated the official documentation according to the new product updates and SEO requirements.',
        'Published many tutorial projects to help developers get started with Bitquery APIs. Some examples are PnL Calculator, Wallet Balance Monitor and BSC sniper bot.',
        'Provided support to developer community via Telegram support channel.',
      ],
    },
    {
      title: 'SDE Intern',
      company: 'TSAW Drones',
      date: 'June 2023 – Nov 2023',
      location: 'IIT-Delhi, New Delhi',
      points: [
        'Using MERN stack, created many internal portals that enhanced operational efficiency by 50%.',
        'Participated in and learnt about DevOps activities and created many essential pipelines on AWS.',
        'Daily activities included making updates on the website.',
        'Optimized the SEO of the main website and made 5+ new pages with seamless responsiveness across all platforms.',
      ],
    },
  ];

  const handleHover = (index: number, isEnter: boolean) => {
    const card = cardRefs.current[index];
    const ball = ballRefs.current[index];
    if (card && ball) {
      animate(card, {
        scale: isEnter ? 1.05 : 1,
        duration: 300,
        easing: 'easeOutQuad',
      });
      if (isEnter) {
        animate(ball, {
          translateY: [-20, 0],
          rotate: '1turn',
          duration: 500,
          easing: 'easeOutBounce',
          loop: false,
        });
      }
    }
  };

  return (
    <section className="py-20 bg-cyber-bg/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              className="bg-cyber-bg p-6 rounded-lg shadow-lg relative"
            >
              <div ref={(el) => { ballRefs.current[index] = el; }} className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full opacity-0"></div>
              <h3 className="text-2xl font-semibold mb-2 neon-text">{exp.title}, {exp.company}</h3>
              <p className="text-gray-400 mb-4">{exp.date} | {exp.location}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.points.map((point, pIndex) => (
                  <li key={pIndex} className="text-gray-300">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}