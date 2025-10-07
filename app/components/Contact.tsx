import { IoMdMail } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-20 bg-cyber-bg">
      <div className="flex-col mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 neon-text">Contact ME</h2>
        <button className="cyber-button"> 
          <Link href="mailto:ksmahajan001@gmail.com"><IoMdMail size={30}/></Link>
        </button>
        <button className="cyber-button">
          <Link href="https://www.linkedin.com/in/kshitij-mahajan-61a593205/">
          <FaLinkedin size={30}/>
          </Link>
        </button>
        <button className="cyber-button">
          <Link href="https://github.com/Kshitij0O7">
          <FaGithub size={30}/>
          </Link>
        </button>
        <button className="cyber-button">
          <Link href="https://x.com/Kshitij007527">
          <FaXTwitter size={30}/>
          </Link>
        </button>
      </div>
    </section>
  );
}