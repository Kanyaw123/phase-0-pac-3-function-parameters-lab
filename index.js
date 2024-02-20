function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  function introductionWithLanguageOptionalOverride(name, language) {
    if (language === undefined) {
      language = "JavaScript";
    }
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  console.log(introduction("Mateen"));
  console.log(introductionWithLanguage("Kanyaw", "Python"));
  console.log(introductionWithLanguageOptional("Sara"));
  console.log(introductionWithLanguageOptionalOverride("Ali", "Java"));
  