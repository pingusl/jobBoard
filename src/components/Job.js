const Job = (props) => {
  const nameClass = props.nameClass;
  const title = props.title;
  const contractType = props.contractType;
  const country = props.country;
  const city = props.city;

  return (
    <div className={nameClass}>
      <h2>{title}</h2>
      <h3>
        {contractType} {country} {city}
      </h3>
    </div>
  );
};
export default Job;
