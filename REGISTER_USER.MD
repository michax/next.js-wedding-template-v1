Got to a `pages/api/register.js` and enable registration by changing `ENABLE_REGISTRATION` const to true;

Then run below script with desired password and username in your browser with local server running.
After you create the account, remember to change `ENABLE_REGISTRATION` to false.

```javascript
{
  const password = "put-password-here";
  const username = "put-username-here";

  const body = { username: username, password: password };

  const response = await fetch("api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}
```
