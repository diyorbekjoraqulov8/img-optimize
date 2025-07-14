// import { describe, it, expect } from 'jest';
// import { mount } from '@vue/test-utils';
// import MyImgNpm from '../../img-header';
//
// describe('MyImgNpm', () => {
//     it('rasmni to‘g‘ri yuklaydi', () => {
//         const wrapper = mount(MyImgNpm, {
//             props: {
//                 src: 'https://via.placeholder.com/150',
//                 alt: 'Maxsus Rasm'
//             }
//         });
//         expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');
//         expect(wrapper.find('img').attributes('alt')).toBe('Maxsus Rasm');
//     });
//
//     it('xatolikda placeholder ni ko‘rsatadi', () => {
//         const wrapper = mount(MyImgNpm, {
//             props: {
//                 src: 'invalid-url',
//                 placeholder: 'https://via.placeholder.com/150'
//             }
//         });
//         // Simulyatsiya uchun onError handlerini sinab ko‘rish uchun vaqtinchalik yechim
//         wrapper.find('img').trigger('error');
//         expect(wrapper.find('img').attributes('src')).toBe('https://via.placeholder.com/150');
//     });
// });