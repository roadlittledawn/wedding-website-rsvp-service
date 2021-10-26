The service behind RSVP data for wedding-website.

## Run

Set env var for MongoDB Atlas connection

Use `yarn develop`

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
