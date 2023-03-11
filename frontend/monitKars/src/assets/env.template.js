(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["baseApiUrl"] = "${BASE_API_URL}";
  window["env"]["autority"] = "${AUTORITY}";
  window["env"]["autorityRealm"] = "${REALM}";
  window["env"]["autorityClientId"] = "${CLIENT_ID}";
  window["env"]["scope"] = "${SCOPE}";
})(this);
