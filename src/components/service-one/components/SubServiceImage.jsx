function SubServiceImage({ url, alt }) {
  return (
    <img
      className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
      src={url}
      alt={alt}
    />
  );
}

export default SubServiceImage;
