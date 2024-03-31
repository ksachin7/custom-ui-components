import { defaults } from 'jest-config'; // Importing defaults from jest-config

export default {
  ...defaults,                             // include defaults
  testEnvironment: 'jsdom',                // Setting test environment to jsdom
  modulePaths: ['/shared/vendor/modules'], // Specifying module paths
  moduleFileExtensions: ['js', 'jsx'],     // Specifying module file extensions
  moduleDirectories: ['node_modules', 'bower_components', 'shared'], // Specifying module directories
  moduleNameMapper: {
    // Mapping file extensions to mock files
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    // Transforming files with babel-jest
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.js'], // Setting up files after environment
};
