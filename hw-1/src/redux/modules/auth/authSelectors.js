const isAuthenticated = state => state.auth.isAuthenticated;
const userName = state => (state.auth.user ? state.auth.user.name : '');
const userEmail = state => (state.auth.user ? state.auth.user.email : '');
const userId = state => (state.auth.user ? state.auth.user.id : '');

const token = state => state.auth.token;

export default { isAuthenticated, token, userName, userEmail, userId };
