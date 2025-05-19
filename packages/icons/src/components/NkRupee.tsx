import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkRupee = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="rupee"><path id="Vector" d="M6.5 3.5H17.5M6.5 8.22222H17.5M14.2917 20.5L6.5 12.9444H9.25C15.3614 12.9444 15.3614 3.5 9.25 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkRupee);
export default ForwardRef;