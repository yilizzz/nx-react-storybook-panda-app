import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-right"><path id="Vector" d="M4.5 12H19.5M19.5 12L13.875 6M19.5 12L13.875 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowRight);
export default ForwardRef;