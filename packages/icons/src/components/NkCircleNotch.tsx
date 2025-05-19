import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkCircleNotch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="circle-notch"><path id="Vector" d="M7.71664 4C4.90752 5.53042 3 8.51937 3 11.956C3 16.9509 7.02944 21 12 21C16.9706 21 21 16.9509 21 11.956C21 8.51937 19.0925 5.53042 16.2834 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkCircleNotch);
export default ForwardRef;