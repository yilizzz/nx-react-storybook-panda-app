import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLeaf = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="leaf"><path id="Vector" d="M5.97257 18.0281C13.5983 22.6036 19.6988 16.5029 18.9363 5.06449C7.49793 4.30191 1.39764 10.4026 5.97257 18.0281ZM5.97257 18.0281L4 20M5.97257 18.0281L10.1006 13.8994" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLeaf);
export default ForwardRef;