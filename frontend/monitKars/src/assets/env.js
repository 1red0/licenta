(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseApiUrl"] = "http://localhost:7148/";
  // window["env"]["baseApiUrl"] = "https://localhost:7083/";
  window["env"]["autority"] = "http://localhost:4335";
  window["env"]["autorityRealm"] = "master";
  window["env"]["autorityClientId"] = "monitKars";
  window["env"]["scope"] = "openid profile email roles";
  //Environemt variables for Organisation
  window["env"]["orgName"] = "Test Organisation";
  window["env"]["orgAddr"] = "Romania, Dolj, Cariova, Str. Test, Nr. 0";
  window["env"]["orgMail"] = "testorganisation@test.com";
  window["env"]["orgPhone"] = "0700000000";
})(this);
