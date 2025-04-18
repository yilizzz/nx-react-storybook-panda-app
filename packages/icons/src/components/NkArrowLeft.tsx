import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="arrow-left"><path id="Vector" d="M19.5 12H4.5M4.5 12L10.125 6M4.5 12L10.125 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkArrowLeft);
export default ForwardRef;