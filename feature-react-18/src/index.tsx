import ReactDOM from 'react-dom';
import { React18 } from './React18';

export type React18ComponentProps = {
    'some-method': (value: string) => void;
}

const renderComponentOnRootWithProps = async (
    container: ShadowRoot,
    componentProps: React18ComponentProps
) => {
    // const reactRoot = ReactDOM
    ReactDOM
        .render(<React18 {...componentProps} />, container) // react@<18 syntax
        // .createRoot(container) // react@18 syntax
        // .render(<React18 {...componentProps} />)
};

export function React18Component(props: React18ComponentProps, elem: Element) {
    if (!elem.shadowRoot) {
        elem.attachShadow({ mode: 'open' });
        const setupComponent = async () => {
            await renderComponentOnRootWithProps(elem.shadowRoot!, props);
        };


        void setupComponent();
    }
}
