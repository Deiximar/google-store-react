const Icon = ({ name, describe, className, url }) => {
  return <a href={url}><img src={name} alt={describe} className={className}/></a>;
};
export default Icon;
