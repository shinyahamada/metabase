/**
 * session id を取得するクラス
 */

export default class Session {

    // セッションURL
    sessionUrl: string

    // セッションID
    sessionId: string;

    // username
    username: string;

    // password
    password: string;

    constructor() {
        this.sessionUrl = PropertiesService.getScriptProperties().getProperty('SESSION_URL');
        this.username = PropertiesService.getScriptProperties().getProperty('USER_NAME');
        this.password = PropertiesService.getScriptProperties().getProperty('METABASE_PASS');
        this.sessionId = this.startSession();
    }

    startSession(): string {

        const headers: Object = {
            "Content-Type": "application/json",
        };

        const payload: Object = {
            "username": this.username,
            "password": this.password,
        };

        const options: Object = {
            "method": "POST",
            "headers": headers,
            "payload": JSON.stringify(payload),
            "muteHttpExceptions": true
        };

        // response => {"id": "*******************"}
        const res: Object = UrlFetchApp.fetch(this.sessionUrl, options);

        return res
    }

}