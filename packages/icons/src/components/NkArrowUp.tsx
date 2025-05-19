import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-up"><path id="Vector" d="M12 19.5L12 4.5M12 4.5L6 10.125M12 4.5L18 10.125" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowUp);
export default ForwardRef;