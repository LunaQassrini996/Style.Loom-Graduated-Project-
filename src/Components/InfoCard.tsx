export interface InfoCardProps{
  iconSrc:string;
  imageSrc:string;
  title:string;
  description:string;
  layout?:string;
}
const InfoCard = ({
  iconSrc,
  imageSrc,
  title,
  description,
  
}: InfoCardProps) => {
  return (
    <div className="relative p-6 rounded-xl flex flex-col justify-between min-h-[220px] overflow-hidden bg-transparent">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute top-2 right-2 w-24 h-24 object-contain opacity-90 z-0"
        />
      )}

      <div className="z-10 relative">
        {iconSrc && (
          <div className="w-14 h-14 mb-4  rounded-full flex items-center justify-center">
            <img
              src={iconSrc}
              alt={`${title} icon`}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
            />
          </div>
        )}
        <h3 className="text-white text-2xl font-medium mb-1">{title}</h3>
        <p className="text-gray-400 text-lg font-normal ">{description}</p>
      </div>
    </div>
  );
};
export default InfoCard;
