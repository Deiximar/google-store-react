const Icon = ({ name, describe, classNameProp }) => {
  return <img src={name} alt={describe} className={classNameProp} />;
};
export default Icon;
