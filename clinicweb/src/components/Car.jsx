const Card =({
    image,
    title,
    description,
    children,
    className=''
}) => {
    return (
        <div className={`${className}`}>
       {image && (
        <div className="">
            <div className=""></div>
            <img src={image} 
            title={title}
            className={`${className}`}/>
        </div>
       )}
       <div className="p-6 grow flex flex-col">
               {title && (
                <h3 className="text-xl font-semibold text-white  mb-3 transition-colors duraton-300 ">{title}</h3>
               )}
               {description &&(
                <p className="text-gray-400 text-base">{description}</p>
               )}
               {children}
       </div>
        </div>
    )
}

export default Card;