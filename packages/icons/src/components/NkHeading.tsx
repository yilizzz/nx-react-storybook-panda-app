import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkHeading = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="heading"><path id="Vector" d="M7.25 4.5V19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M16.75 4.5V19.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_3" d="M7.25 12H16.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkHeading);
export default ForwardRef;