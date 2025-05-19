import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkPower = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="power"><path id="Vector" d="M17.9531 5.25C19.8215 6.89913 21 9.31195 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 9.31195 4.17846 6.89913 6.04691 5.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /><path id="Vector_2" d="M12 3V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkPower);
export default ForwardRef;