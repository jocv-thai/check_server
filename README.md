# check_server

![check server](https://github.com/nomrand/check_server/workflows/check%20server/badge.svg)


## How to check server in GitHub Actions

1. Fork this repository to your GitHub account
2. Enable Actions (Click [Actions] tab)
3. Set Secrets below

   [Settings] > [Secrets] > [New secret]

| Secret Name  | Secret Value  |
| ------------ | ------------- |
| CHECK_URL  | URL for check |
| CHECK_TITLE  | Title for check (shown in titlebar of the browser) |
| CHECK_CSS_ELEMENT  | Element for check (must be exist) |
| SLACK_WEBHOOK_URL  | Slack Incoming Webhooks URL |
| SLACK_WEBHOOK_CHANNEL | Slack Channel to post |
| LINE_ACCESS_TOKEN | Line Notify Access Token |


#### To get Slack Incoming Webhooks URL
See
https://api.slack.com/messaging/webhooks



## How to check by cypress in local machine
1. Install Node.js in your machine
2. Clone this repository
3. Change Environment Variable ("env") in cypress.json
4. Execute bellow at top of this repository
```
npx cypress run --browser chrome
```

(Slack & Line post is not supported)