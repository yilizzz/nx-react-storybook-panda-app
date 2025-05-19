import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkSeven = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="seven"><path id="Vector" d="M10.5 17C10.5 13.25 15.5 7 15.5 7C15.5 7 11.75 7.625 9.25 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkSeven);
export default ForwardRef;