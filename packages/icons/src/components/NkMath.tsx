import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkMath = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="math"><path id="Vector" d="M3.42857 18.3659H9.42857M15 8.70732H21M15 4.31707H21M3 6.5122H6.42857M6.42857 6.5122H9.85714M6.42857 6.5122V3M6.42857 6.5122V10.0244M15.6002 21L18.0247 18.5163M18.0247 18.5163L20.4489 16.033M18.0247 18.5163L15.6002 16.0327M18.0247 18.5163L20.4489 20.9997" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkMath);
export default ForwardRef;