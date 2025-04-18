import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkChevronDoubleDown = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="chevron-double-down"><path id="Vector" d="M6 6L12 12L18 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M6 12L12 18L18 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkChevronDoubleDown);
export default ForwardRef;