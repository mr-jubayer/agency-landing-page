import Button from "../../ui/Button";
import Figma from "../../ui/icons/Figma";
import Github from "../../ui/icons/Github";

function HeroContent() {
  return (
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        Building digital <br />
        products &amp; brands.
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        This free and open-source landing page template was built using the
        utility classes from
        <a href="#" className="hover:underline">
          Tailwind CSS
        </a>
        and based on the components from the Flowbite Library and the Blocks
        System.
      </p>
      <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Button variant="outline">
          <Github />
          View on GitHub
        </Button>
        <Button variant="ghost">
          <Figma />
          Get Figma file
        </Button>
      </div>
    </div>
  );
}
export default HeroContent;
