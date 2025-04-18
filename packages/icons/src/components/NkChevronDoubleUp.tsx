import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkChevronDoubleUp = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="chevron-double-up"><path id="Vector" d="M18 12L12 6L6 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M18 18L12 12L6 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkChevronDoubleUp);
export default ForwardRef;