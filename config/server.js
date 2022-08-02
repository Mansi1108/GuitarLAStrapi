module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1041),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '50dd7034dc7cf36c454b3e381133a556'),
    },
  },
});
