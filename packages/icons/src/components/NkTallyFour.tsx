import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";
const NkTallyFour = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={2} color="currentColor" ref={ref} {...props}><g id="tally-four"><path id="Vector" d="M4 4V20M9.33333 4V20M14.6667 4V20M20 4V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></g></svg>;
const ForwardRef = forwardRef(NkTallyFour);
export default ForwardRef;