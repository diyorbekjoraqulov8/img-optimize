import { defineComponent, h } from 'vue';

export default defineComponent({
    name: 'ImgOptimize',
    props: {
        src: {
            required: true,
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: 'alt image'
        },
        className: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'https://placehold.co/600x400'
        }
    },
    setup(props) {
        const handleError = (event) => {
            event.target.src = props.placeholder;
        };

        return () => h('img', {
            src: props.src,
            alt: props.alt,
            class: props.className,
            style: { maxWidth: '100%' },
            onError: handleError
        });
    }
});