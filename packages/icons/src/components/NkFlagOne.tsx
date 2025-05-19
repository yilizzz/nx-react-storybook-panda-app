import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkFlagOne = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="flag-one"><path id="Vector" d="M4.75 14L18.53 9.95937C19.49 9.67786 19.49 8.32214 18.53 8.04063L4.75 4M4.75 14V4M4.75 14V21M4.75 4V3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkFlagOne);
export default ForwardRef;