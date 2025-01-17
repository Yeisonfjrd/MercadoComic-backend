module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: process.env.NEON_API_KEY, 
        neonProjectName: process.env.NEON_PROJECT_NAME,
        neonRole: process.env.NEON_ROLE,
        gitBranch: process.env.GIT_BRANCH
      }
    },
  };