export function urlCreator() {

  const year = 2014;
  let modifierString = "";
  const modifiers = [
    //Location Information
    "school.name", "school.city", "school.state", "school.locale",

    //Demographic Info
    year+".student.size", year+".student.demographics.men",

    //Admissions Info
    year+".admissions.admission_rate.overall", year+".admissions.sat_scores.average.overall",

    //Cost Info
    year+".cost.avg_net_price.private", year+".cost.avg_net_price.public", year+".cost.attendance.academic_year",

    //Completion Rate
    year+".completion.completion_rate_4yr_150nt", year+".completion.completion_rate_less_than_4yr_150nt"
  ];

  for (var i = 0; i < modifiers.length; i++) {
    modifierString += modifiers[i] + ","
  }

  return modifierString;

}
