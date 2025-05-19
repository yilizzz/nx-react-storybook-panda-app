import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkRainbow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="rainbow"><path id="Vector" d="M3 17.5V15.5C3 10.5294 7.02944 6.5 12 6.5C16.9706 6.5 21 10.5294 21 15.5V17.5M6 17.5V15.5C6 12.1863 8.68629 9.5 12 9.5C15.3137 9.5 18 12.1863 18 15.5V17.5M9 17.5V15.5C9 13.8431 10.3431 12.5 12 12.5C13.6569 12.5 15 13.8431 15 15.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkRainbow);
export default ForwardRef;