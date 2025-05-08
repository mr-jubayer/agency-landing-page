function Button({ className, children, variant, ...props }) {
  const classes = `
  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 cursor-pointer ${className}

   ${
     variant === "primary" &&
     "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300  sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
   }
  
  ${variant === "outline" && ""}

  ${variant === "ghost" && ""}
        `;
  return (
    <button className={`${classes}`} {...props}>
      {children}
    </button>
  );
}
export default Button;
