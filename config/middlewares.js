module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            `${process.env.AWS_BUCKET}.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::security",
  {
    upload: {
      config: {
        breakpoints: {
          // Comment or uncomment keys below to disable thumbnail creation.
          // Useful when you rely on services for image resizing (ie: vercel...) and
          // don't want to increase disk usage, backups..
          // Caution: this applies to new uploaded images.
          // xlarge: 1920,
          // large: 1000,
          // medium: 750,
          // small: 500,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
