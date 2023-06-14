import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.autority,
        realm: environment.autorityRealm,
        clientId: environment.autorityClientId,
      },
      loadUserProfileAtStartUp: true,
      bearerExcludedUrls: [],
      initOptions: {
        scope: 'roles profile',
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
    });
}
