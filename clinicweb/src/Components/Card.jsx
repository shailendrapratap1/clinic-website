const Card = ({
  image,
  title,
  description,
  text,
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
          />
        </div>
      )}
      {text && (
        <div>
          
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