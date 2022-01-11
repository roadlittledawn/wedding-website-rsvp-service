The service behind RSVP data for wedding-website.

## Run

Set env var for MongoDB Atlas connection

Use `yarn develop`

## Deploy

Log in via Heroku CLI:

```bash
heroku login
```

Log in via browser which should log you in via command line.

When PR is merged in github, switch to `main`, pull down latest.

To deploy to heroku:

```bash
git push heroku main
```

To access heroku logs, monitor deploy and status:

```
heroku logs --tail
```

## Queries

Get an invite by `inviteId`:

```graphql
query GetInvite($input: InviteInput!) {
  invite(input: $input) {
    id
    inviteId
    partyName
    guestList {
      name
      isGoing
      mealChoice
      dietaryRestrictions
    }
  }
}
```

Query variables:

```json
{
  "input": {
    "inviteId": "8749js"
  }
}
```

## Mutations

```graphql
mutation RecordResponse($input: RecordResponseInput!) {
  recordResponse(input: $input) {
    isSubmitted
    guestList {
      name
      isGoing
    }
  }
}
```

Query variables:

```json
{
  "input": {
    "inviteId": "8749js",
    "payload": {
      "guestList": [
        {
          "name": "Courtney Langosch",
          "isGoing": true,
          "mealChoice": "Chicken"
        },
        {
          "name": "Cassie Bauer",
          "isGoing": true,
          "mealChoice": "Pasta"
        }
      ]
    }
  }
}
```
