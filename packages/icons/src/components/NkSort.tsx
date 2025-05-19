import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="sort"><path id="Vector" d="M4.5 7H19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M4.5 12H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M4.5 17H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSort);
export default ForwardRef;