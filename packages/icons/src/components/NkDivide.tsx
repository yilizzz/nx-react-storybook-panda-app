import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkDivide = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="divide"><path id="Vector" d="M3 12H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M12 5.74356V5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M12 19V18.2565" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkDivide);
export default ForwardRef;