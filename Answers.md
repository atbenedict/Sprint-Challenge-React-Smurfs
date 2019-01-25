1.  Explain the differences between `client-side routing` and `server-side routing`.

Server-side routing: All requests from the user are sent to the server, and the server returns the entire view as a refreshed page. Pros are that you only load the page you're interested in (e.g. one page of a novel). Cons are that new views can be slow, and frequently unneccesary refreshes of static information (e.g. headers and footers).

Client-side routing: App is loaded into the client's browser, and routing instructions are handled there programatically. This can provide fast refreshing of just the components of the page which have changed. Cons are that you need to load the entire app to just look at a single view (e.g. downloading a novel to read a single page)

2.  What does HTTP stand for?

HyperText Transfer Protocol

3.  What does CRUD stand for?

Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

Create = POST
Read = GET
Update = PATCH
Delete = DELETE

1.  Mention three tools we can use to make AJAX requests

GET, POST, Axios library
