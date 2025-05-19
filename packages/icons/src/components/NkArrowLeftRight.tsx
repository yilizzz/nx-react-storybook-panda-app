import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowLeftRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-left-right"><path id="Vector" d="M6.5 7.5L17.5 7.5M17.5 7.5L14 11M17.5 7.5L14 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M17.5 16.5L6.5 16.5M6.5 16.5L10 20M6.5 16.5L10 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowLeftRight);
export default ForwardRef;