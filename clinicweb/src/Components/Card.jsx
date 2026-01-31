const Card = ({
  image,
  title,
  description,
  children,
  className = "",
  imgclass = "",
  imageClass = "",
  contentClass = "",
  titleClass = "",
  descClass = ""
}) => {
  return (
    <div className={className}>
      
      {image && (
        <div className={imgclass}>
          <img
            src={image}
            alt={title}
            className={`${imageClass} `}
            // className={imageClass}
          />
        </div>
      )}

      <div className={contentClass}>
        {title && <h3 className={titleClass}>{title}</h3>}
        {description && <p className={descClass}>{description}</p>}
        {children}
      </div>

    </div>
  );
};

export default Card;