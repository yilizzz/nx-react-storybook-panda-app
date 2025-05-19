import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowUpDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-up-down"><path id="Vector" d="M7.5 17.5V6.5M7.5 6.5L11 10M7.5 6.5L4 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M16.5 6.5V17.5M16.5 17.5L20 14M16.5 17.5L13 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowUpDown);
export default ForwardRef;