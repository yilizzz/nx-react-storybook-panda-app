import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPaperclip = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="paperclip"><path id="Vector" d="M3.84546 10.2236L9.58403 4.69459C15.0127 -0.543074 23.8296 7.53743 18.1801 12.9882L11.0679 19.8501C7.38411 23.4042 1.40123 17.921 5.23484 14.2223L12.2447 7.45911C14.1835 5.58852 17.3324 8.47441 15.3147 10.4211L9.49194 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPaperclip);
export default ForwardRef;