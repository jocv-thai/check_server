# check_server

![check server](https://github.com/nomrand/check_server/workflows/check%20server/badge.svg)


## How to check server in GitHub Actions

1. Fork this repository to your GitHub account
2. Set Secrets below

   [Settings] > [Secrets] > [New secret]

| Secret Name  | Secret Value  |
| ------------ | ------------- |
| CHECK_URL  | URL for check |
| CHECK_TITLE  | Title for check (shown in titlebar of the browser) |
| CHECK_CSS_ELEMENT  | Element for check (must be exist) |
| SLACK_WEBHOOK_URL  | Slack Incoming Webhooks URL |

#### To get Slack Incoming Webhooks URL
See
https://api.slack.com/messaging/webhooks



## How to test in local machine
1. Install Node.js in your machine
2. Change Environment Variable ("env") in cypress.json
3. Do bellow at top of this project
```
npx cypress run --browser chrome
```