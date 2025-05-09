import BollIcon from "../../ui/icons/BollIcon";
import Facebook from "../../ui/icons/Facebook";
import GithubWhite from "../../ui/icons/GithubWhite";
import Instagram from "../../ui/icons/Instagram";
import Twitter from "../../ui/icons/Twitter";

const socialIcons = [
  { id: "f", icon: <Facebook /> },
  { id: "i", icon: <Instagram /> },
  { id: "t", icon: <Twitter /> },
  { id: "g", icon: <GithubWhite /> },
  { id: "b", icon: <BollIcon /> },
];

function SocialIcons() {
  return (
    <ul className="flex justify-center mt-5 space-x-5">
      {socialIcons.map((item) => (
        <li key={item.id}>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default SocialIcons;
