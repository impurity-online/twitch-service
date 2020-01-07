module.exports = {
    roots: ['<rootDir>/tests'],
    preset: 'ts-jest',
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
