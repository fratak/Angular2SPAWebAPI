﻿/**
 * Configuration data for the app, as in Config.cs.
 */
export class Config {

    /**
     * Token endpoint.
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
     */
    public static readonly TOKEN_ENDPOINT: string = "/connect/token";

    /**
     * Revocation endpoint.
     */
    public static readonly REVOCATION_ENDPOINT: string = "/connect/revocation";

    /**
     * The ClientId.
     */
    public static readonly CLIENT_ID: string = "Angular2SPA";

    /**
     * Resource Owner Password Credential grant.
     */
    public static readonly GRANT_TYPE: string = "password";

    /**
     * The Web API & refresh tokens.
     */
    public static readonly SCOPE: string = "WebAPI offline_access";

}
