# Call Handling System Readme

## Flow
1. Dial the number: +17068073977
2. Listen to the initial message: "For call forwarding, press 1. For voicemail, press 2."
3. If 1 is pressed, the call will be redirected to the number defined in the .env file.
4. If 2 is pressed, a prompt will ask the caller to leave a voicemail.
5. Call and voicemail logs will be displayed on the server's main page.

## Design
- `call-handling.controller`: Manages API calls from Twilio for call handling.
- `api.controller`: Manages other API calls to retrieve logs.
- Public Endpoints:
  - http://137.184.140.12
  - http://137.184.140.12/voice-logs.html
  - http://137.184.140.12/api/call-logs
  - http://137.184.140.12/api/call-logs-supa
  - http://137.184.140.12/api/voice-mails
  - http://137.184.140.12/api/voice-mails-supa
- Mail Page: Displays simple HTML page showing call and voicemail logs without authentication.

## Limitations
- Due to time constraints, some features were skipped.
- Additional model definitions and authentication could be implemented.
- Currently, all endpoints are public; no authentication is in place.
- Unit test cases are not provided, and code improvements can be made.
