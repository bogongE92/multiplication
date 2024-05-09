/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	"extends": [
		'plugin:prettier/recommended',
		'eslint:recommended',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	// axios await 오류 잡아주기
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	env: {
		'vue/setup-compiler-macros': true,
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80, //  줄 바꿈 할 폭 길이
				tabWidth: 4,
				singleQuote: true, // single 쿼테이션 사용 여부
				trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
				bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부 
				semi: true, // 세미콜론 사용 여부
				useTabs: true, // 탭 사용 여부
				arrowParens: 'avoid', // 화살표 함수 괄호 사용 방식
			},
		],
	},
}