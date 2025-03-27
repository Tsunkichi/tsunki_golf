// This is a template file for authentication configuration
// Copy this file to auth.ts and update the values

export const AUTH_CONFIG = {
    users: [
        {
            username: 'admin',
            password: 'change-this-password', // In production, use hashed passwords
            role: 'admin',
            name: 'Administrator',
            email: 'admin@example.com'
        },
        {
            username: 'author1',
            password: 'change-this-password',
            role: 'author',
            name: 'Author Name',
            email: 'author@example.com'
        }
    ],

    // JWT secret for token signing (in production, use environment variables)
    jwtSecret: process.env.JWT_SECRET || 'clave-predeterminada',


    // Token expiration time (24 hours)
    tokenExpiration: '24h',

    // Password requirements
    passwordRequirements: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true
    }
};

// Helper function to validate password strength
export function validatePassword(password: string): boolean {
    const { minLength, requireUppercase, requireLowercase, requireNumbers, requireSpecialChars } = AUTH_CONFIG.passwordRequirements;

    if (password.length < minLength) return false;
    if (requireUppercase && !/[A-Z]/.test(password)) return false;
    if (requireLowercase && !/[a-z]/.test(password)) return false;
    if (requireNumbers && !/[0-9]/.test(password)) return false;
    if (requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;

    return true;
}

// Helper function to find user by credentials
export function findUserByCredentials(username: string, password: string) {
    return AUTH_CONFIG.users.find(
        user => user.username === username && user.password === password
    );
} 
