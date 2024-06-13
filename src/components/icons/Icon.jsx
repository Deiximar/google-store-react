const Icon = ({ name, describe, classNameProp }) => {
  console.log(classNameProp);
  return <img src={name} alt={describe} className={classNameProp} />;
};
export default Icon;
