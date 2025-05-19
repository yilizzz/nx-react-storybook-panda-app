import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkListCheck = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="list-check"><path id="Vector" d="M7.5 16.0385L4.6875 19.5L3 18.3462M7.5 10.2692L4.6875 13.7308L3 12.5769M7.5 4.5L4.6875 7.96154L3 6.80769" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M11 17.5H21M11 12H21M11 6.5H21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkListCheck);
export default ForwardRef;