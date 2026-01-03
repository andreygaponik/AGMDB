import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-auto py-6">
      <div className="container flex items-center justify-between">
        <span className="text-sm text-neutral-400">
          © {new Date().getFullYear()} AGMDB
        </span>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/andreygaponik/AGMDB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
            className="text-neutral-400 transition hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/andreygaponik/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-neutral-400 transition hover:text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
