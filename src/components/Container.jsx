function Container({ children, className }) {
  return (
    <section className={`max-w-screen-xl px-4 mx-auto ${className}`}>
      {children}
    </section>
  );
}
export default Container;
