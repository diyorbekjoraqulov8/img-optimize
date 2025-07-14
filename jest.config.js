module.exports = {
    testEnvironment: 'jsdom', // Vue uchun brauzer muhitini taqlid qilish
    transform: {
        '^.+\\.vue$': 'vue-jest', // Vue fayllarini transformatsiya qilish
        '^.+\\.js$': 'babel-jest' // JS fayllarini Babel orqali ishlash
    },
    moduleFileExtensions: ['js', 'vue'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'] // Test fayllari nomini aniqlash
};