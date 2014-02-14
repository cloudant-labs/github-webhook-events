# Github Webhooks + Cloudant

This README contains instructions for setting up a Webhook for any Github repo
so that it's events are published to a Cloudant database. This repo also
contains some MapReduce and Full-Text search indexes for publishing into that
Cloudant database for getting useful info out of that activity, or to use along
side other activity you might be dumping in that database via other Webhooks +
[Weblatch](http://github.com/cloudant-labs/Weblatch).

## Setting things up

Note: Throughout these instructions replace anything in ALL CAPS with your own
information.

#### At Cloudant.com

1. create a `github` (or whatever) database in `YOUR.cloudant.com`
2. visit the "Permissions" section for that Database
3. generate an API Key & Secret (keep a copy of both for later use)
4. change that API Key's permission from "Reader" to "Writer" (only)

#### Now, over at Github.com

1. pick a repo you manage
2. visit **Settings** then **Webhooks & Services** for the repo
3. add a webhook to `POST` to
`https://API_KEY:API_SECRET@YOUR.cloudant.com/DB`
3. set the "Payload version" dropdown to `application/vnd.github.v3+json`
4. set to "Send me **everything**."
5. save it.
6. reload the **Webhooks & Services** page and was happy to see a green checkmark
showing that the webhook succeeded.
7. click the URL of your Webhook and see what got sent in the *Recent Deliveries* section.

#### Lastly, back at Cloudant.com

1. check the contents of the DB which should now contain a sample document similar to this one:

```javascript
{
  "_id": "48117e624b7c7046321a91d7d9458466",
  "_rev": "1-1b43993ced1056aba9cdb3e3b05be0e5",
  "zen": "Anything added dilutes everything else.",
  "hook_id": 1808374
}
```
