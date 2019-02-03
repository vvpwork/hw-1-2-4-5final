const isAuthenticated = state => state.auth.isAuthenticated;

const token = state => state.auth.token;

export default { isAuthenticated, token };
