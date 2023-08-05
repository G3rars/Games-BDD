const ROLES = {
    USER: 'user',
    ADMIN: 'admin'
}

class User {
    email
    password
    role
    cart
    constructor({ email, password, role = ROLES.USER, cart = []})
    {
        this.email = email
        this.password = password
        this.role = role
        this.cart = cart
    }

    DTO () {
        return {
            email: this.email,
            password: this.password,
            role: this.role,
            cart: this.cart
        }
    }
}

module.exports = User;