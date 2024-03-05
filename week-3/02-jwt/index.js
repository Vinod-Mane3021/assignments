const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const secretKey = "hfthrbhdgsafb";

const signJwtSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

function signJwt(username, password) {
  // Your code here
  const inputs = { username, password };
  const validation = signJwtSchema.safeParse(inputs);

  if (validation.success) {
    const token = jwt.sign(
        inputs,
        secretKey,
        { expiresIn: "7d" }
    );
    return token;
  } else {
    return null;
  }
}


/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here
    try {
        const decoded = jwt.verify(token, secretKey)
        if(decoded) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

console.log("verifyJwt : ", verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpbm9kMTFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMjIyMjIiLCJpYXQiOjE3MDMwODU4NzUsImV4cCI6MTcwMzY5MDY3NX0.UsbsBgeczmo-JQvaw-GZ7iwxB2BhFSa-yARx0fnMp0Q"));

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  // Your code here
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
