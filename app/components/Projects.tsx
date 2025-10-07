'use client';

import { useRef } from 'react';
import { animate } from 'animejs';
import Link from 'next/link';

interface ProjectItem {
  name: string;
  points: string[];
  links: { label: string; url: string }[];
}

export default function Projects() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const ballRefs = useRef<(HTMLElement | null)[]>([]);

  const projects: ProjectItem[] = [
    {
      name: 'BSC Sniper Trading Bot',
      points: [
        'Created an automated bot to detect newly created BSC Memecoins.',
        'Utilized Bitquery Protobuf streams to capture the newly created token details with minimal latency.',
        'Used ethers library functions to execute buy as soon as the token is created and sell after exactly one minute.',
        'Deployed in on Google Cloud VM instance to keep it running 24*7.',
      ],
      links: [
        { label: 'Live Demo', url: 'https://www.youtube.com/watch?v=vgOHgqTJmj0' },
        { label: 'GitHub', url: 'https://github.com/Kshitij0O7/evm-sniper' },
      ],
    },
    {
      name: 'Protobuf Kafka NPM package',
      points: [
        'Published the bitquery-protobuf npm package for beginners.',
        'Simplified the process of setting up and running a Protobuf stream.',
        'Used this package to pitch Protobuf stream as a solution to consumers looking for minimal latency.',
      ],
      links: [
        { label: 'Live Demo', url: 'https://www.npmjs.com/package/bitquery-protobuf' },
        { label: 'GitHub', url: 'https://github.com/bitquery/bitquery-protobuf' },
      ],
    },
    {
      name: 'DevRewards',
      points: [
        'Developed a full-stack web3 application using smart contract for rewarding open source contributions.',
        'Implemented a data flow using GitHub web-hooks to access the commit data for the user.',
        'Built a smart contract to run the automated reward distribution when a pull request from user is merged.',
        'Established Chainlink Node and used Chainlink Oracles to enable the communication between smart contract and external API’s.',
      ],
      links: [
        { label: 'Live Demo', url: 'https://devrewards.vercel.app/' },
        { label: 'GitHub Repo', url: 'https://github.com/Kshitij0O7/DevRewards' },
      ],
    },
  ];

  const handleHover = (index: number, isEnter: boolean) => {
    const card = cardRefs.current[index];
    const ball = ballRefs.current[index];
    if (card && ball) {
      animate(card,{
        scale: isEnter ? 1.05 : 1,
        duration: 300,
        easing: 'easeOutQuad',
      });
      if (isEnter) {
        animate(ball,{
          translateY: [-20, 0],
          rotate: '1turn',
          duration: 500,
        });
      }
    }
  };

  return (
    <section className="py-20 rounded-2xl">
      <div className="container mx-auto px-4 h-11/12">
        <h2 className="text-4xl font-bold mb-8 text-center neon-text">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 w-11/12 mx-auto ">
          {projects.map((proj, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseEnter={() => handleHover(index, true)}
              onMouseLeave={() => handleHover(index, false)}
              className="bg-cyber-bg p-6 rounded-lg shadow-lg relative"
            >
              <div ref={(el) => { ballRefs.current[index] = el; }} className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full opacity-0"></div>
              <h3 className="text-2xl font-semibold mb-2 neon-text">{proj.name}</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                {proj.points.map((point, pIndex) => (
                  <li key={pIndex} className="text-gray-300">{point}</li>
                ))}
              </ul>
              <div className="flex space-x-2">
                {proj.links.map((link, lIndex) => (
                  <button className='cyber-button' key={lIndex}><Link href={link.url} className="text-cyber-neon hover:text-cyber-secondary no-underline">
                    {link.label}
                  </Link>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}