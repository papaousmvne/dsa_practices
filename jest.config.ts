/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  bail: false,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  verbose: false,
};

export default config;
