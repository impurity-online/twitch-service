module.exports = {
    roots: ['<rootDir>/test'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
    testMatch: ['**/test/**/*.test.(ts|js)'],
    testEnvironment: 'node',
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
    coveragePathIgnorePatterns: ['/node_modules/'],
};
