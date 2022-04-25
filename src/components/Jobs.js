import Job from "./Job";

const Jobs = () => {
  const nameClass = [
    "red-border",
    "green-border",
    "yellow-border",
    "blue-border",
    "pink-border",
    "red-border",
    "green-border",
    "yellow-border",
    "blue-border",
  ];
  const title = [
    "Full Times Sales Associate - Sydney Boutique",
    "Agent de Sécurité - Pantin",
    "Responsable d'Atelier (H/F)",
    "Chef de Projets",
    "Développeur React.js",
    "Sales Associate Stockholm",
    "Vendeur/se-Crans Montana",
    "CRM & DATA Quality Analyst",
    "Infirmier (H/F)",
  ];
  const contractType = [
    "CDI",
    "CDI",
    "CDD",
    "CDD",
    "CDI",
    "CDI",
    "CDI",
    "CDI",
    "CDI",
  ];
  const country = [
    "Australie - Sydney",
    "France - Pantin",
    "France - Paris",
    "France - Paris",
    "France - Paris",
    "Suède - Stockolm",
    "Suisse - Crans-Montana",
    "USA - New York",
    "France - Pantin",
  ];
  //   let jobBox = '<div className="jobs">';

  //   for (let i = 0; i < contractType.length; i++) {
  //     console.log(i);
  //     jobBox =
  //       jobBox +
  //       ` ${(
  //         <Job
  //           nameClass={nameClass[i]}
  //           title={title[i]}
  //           contractType={contractType[i]}
  //           country={country[i]}
  //         />
  //       )}`;
  //   }
  //   jobBox = jobBox + "</div>";
  console.log(nameClass[0]);
  return (
    <div className="jobs">
      <Job
        nameClass={nameClass[0]}
        title={title[0]}
        contractType={contractType[0]}
        country={country[0]}
      />
      <Job
        nameClass={nameClass[1]}
        title={title[1]}
        contractType={contractType[1]}
        country={country[1]}
      />
      <Job
        nameClass={nameClass[2]}
        title={title[2]}
        contractType={contractType[2]}
        country={country[2]}
      />
      <Job
        nameClass={nameClass[3]}
        title={title[3]}
        contractType={contractType[3]}
        country={country[3]}
      />
      <Job
        nameClass={nameClass[4]}
        title={title[4]}
        contractType={contractType[4]}
        country={country[4]}
      />
      <Job
        nameClass={nameClass[5]}
        title={title[5]}
        contractType={contractType[5]}
        country={country[5]}
      />
      <Job
        nameClass={nameClass[6]}
        title={title[6]}
        contractType={contractType[6]}
        country={country[6]}
      />
      <Job
        nameClass={nameClass[7]}
        title={title[7]}
        contractType={contractType[7]}
        country={country[7]}
      />
      <Job
        nameClass={nameClass[8]}
        title={title[8]}
        contractType={contractType[8]}
        country={country[8]}
      />
    </div>
  );

  //   return jobBox;
};

export default Jobs;
