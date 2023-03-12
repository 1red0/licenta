(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseApiUrl"] = "${BASE_API_URL}";
  window["env"]["autority"] = "${AUTORITY}";
  window["env"]["autorityRealm"] = "${REALM}";
  window["env"]["autorityClientId"] = "${CLIENT_ID}";
  window["env"]["scope"] = "${SCOPE}";
  //Environemt variables for Organisation
  window["env"]["orgName"] = "${ORG_NAME}";
  window["env"]["orgAddr"] = "${ORG_ADDR}";
  window["env"]["orgMail"] = "${ORG_MAIL}";
  window["env"]["orgPhone"] = "${ORG_PHONE}";
})(this);
