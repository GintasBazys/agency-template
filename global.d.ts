declare namespace JSX {
    interface IntrinsicElements {
        "lite-youtube": React.DetailedHTMLProps<
            React.HTMLAttributes<HTMLElement>,
            HTMLElement
        > & { videoid: string; autoload?: boolean; nocookie?: boolean };
    }
}
