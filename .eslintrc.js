module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        indent: [
            'error',
            'tab',
            { SwitchCase: 1, ignoredNodes: ['PropertyDefinition'] },
        ], // 탭으로 분리(ide에서 4로 설정할 것), 데코레이터 이후의 노드는 무시
        semi: ['error', 'always'], // 세미콜론 사용
        'array-element-newline': [
            'error',
            {
                ArrayExpression: { multiline: true, minItems: 3 }, // 배열의 요소가 3개 이상일 경우, 각각 한줄씩
            },
        ],
        quotes: [2, 'double', { avoidEscape: false }], // 싱글만 허용
        eqeqeq: [2, 'allow-null'], // == 금지
        'no-empty': ['error', { allowEmptyCatch: false }], // 빈 catch 금지
        'eol-last': 2, // 파일 끝에 개행문자가 없을 경우 경고
        'space-in-parens': [2, 'never'], // 괄호`()` 안에 공백을 추가하지 않습니다.
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // 빈줄 1개 허용
        'space-before-blocks': [2, 'always'], // 블록 앞에 공백을 강제
        'brace-style': [2, '1tbs', { allowSingleLine: true }], // 중괄호 스타일
        'function-paren-newline': ['error', 'consistent'], // 함수의 인자가 여러줄일 경우, 첫번째 인자는 첫줄에, 나머지는 각각 한줄씩
        'object-property-newline': [
            'error',
            { allowAllPropertiesOnSameLine: false },
        ], // 객체의 프로퍼티가 여러줄일 경우, 첫번째 프로퍼티는 첫줄에, 나머지는 각각 한줄씩
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: { multiline: true, minProperties: 3 },
                ObjectPattern: { multiline: true },
                ImportDeclaration: { multiline: true, minProperties: 3 },
                ExportDeclaration: { multiline: true, minProperties: 3 },
            },
        ],
        'object-curly-spacing': ['error', 'always'],
        'function-call-argument-newline': ['error', 'never'], // 함수 인자에 줖바꿈 금지
        'comma-dangle': ['error', 'always'], // 마지막 콤마 강제
        '@typescript-eslint/interface-name-prefix': 'off', // 인터페이스 이름 강제 제거
        '@typescript-eslint/ban-ts-comment': 'warn', // @ts-ignore 등 경고
        '@typescript-eslint/no-non-null-assertion': 'off', // ! 연산자 사용 가능
        '@typescript-eslint/no-use-before-define': 'off', // 변수, 함수 미리 선언 가능
        '@typescript-eslint/no-warning-comments': 'off', //
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        'node/no-missing-import': 'off',
        'node/no-empty-function': 'off',
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-missing-require': 'off',
        'node/shebang': 'off',
        'no-dupe-class-members': 'off',
        'require-atomic-updates': 'off',
        '@typescript-eslint/no-explicit-any': 'warn', // any는 경고
    },
};

