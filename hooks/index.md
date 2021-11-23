## useRoute

Can be use to define public routes and protected routes. This hook returns two different functions. **withPublic** and **withProtected**.

- **withPublic** function can be used to define a public route (authentication does not required). But if the user is authenticated, user will be redirected to a given path.
- **withProtected** function can be used to define a protected route. (Authentication is a must. Otherwise the user will be redirected to the login page.)
- current auth state can be accessible as a prop (auth) when using this hook.

```
const ProfilePage = ({auth}) => {
    return (
        <div>
            Profile page
        </div>
    )
}
```

### General usage

- Public route

```
// user profile page (public route)

import { withPublic } from '../hooks/route'

const LoginPage = () => {
    return (
        <div>
            Login page
        </div>
    )
}

export default withPublic(LoginPage)
```

- Protected route

```
// user profile page (protected route)

import { withProtected } from '../hooks/route'

const ProfilePage = () => {
    return (
        <div>
            Profile page
        </div>
    )
}

export default withProtected(ProfilePage)
```

**_NOTE_**: Routes like homepage doesn't require any of these functions to be implemented.
