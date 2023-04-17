module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
      ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
      '^@mixins/(.*)$': '<rootDir>/src/mixins/$1',
      '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
      '^@constants/(.*)$': '<rootDir>/src/constants/$1',
      '^@mixins/(.*)$': '<rootDir>/src/mixins/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@styles/(.*)$': '<rootDir>/src/styles/$1'
    },
    collectCoverage: false,
    coverageReporters: ['lcov', 'text'],
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/public/',
      '.test.js',
    ],
  };
  