import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkLetterVCircle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="letter-v-circle"><path id="Vector" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M9 8.25L12 16.25L15 8.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkLetterVCircle);
export default ForwardRef;